package org.connectbot.terminal

import android.os.Looper
import androidx.compose.ui.graphics.Color
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.Shadows
import org.robolectric.annotation.LooperMode

@RunWith(RobolectricTestRunner::class)
@LooperMode(LooperMode.Mode.PAUSED)
class CursorResizeRegressionTest {
    @Test
    fun cursorSnapshotIsSynchronizedImmediatelyAfterResize() {
        val emulator = TerminalEmulatorFactory.create(
            initialRows = 24,
            initialCols = 80,
            defaultForeground = Color.White,
            defaultBackground = Color.Black,
        ) as TerminalEmulatorImpl

        // ANSI row 10, col 20; prompt text advances only the column.
        emulator.writeInput("\u001B[10;20Hprompt> ".toByteArray())
        Shadows.shadowOf(Looper.getMainLooper()).idle()

        emulator.resize(newRows = 12, newCols = 140)
        Shadows.shadowOf(Looper.getMainLooper()).idle()

        val snap = emulator.snapshot.value
        assertEquals(12, snap.rows)
        assertEquals(140, snap.cols)
        assertTrue(snap.cursorRow in 0 until snap.rows)
        assertTrue(snap.cursorCol in 0 until snap.cols)
        assertEquals(9, snap.cursorRow)
    }

    @Test
    fun cursorClampsToVisibleScreenWhenRowsShrink() {
        val emulator = TerminalEmulatorFactory.create(
            initialRows = 24,
            initialCols = 80,
            defaultForeground = Color.White,
            defaultBackground = Color.Black,
        ) as TerminalEmulatorImpl

        emulator.writeInput("\u001B[20;8Hcmd> ".toByteArray())
        Shadows.shadowOf(Looper.getMainLooper()).idle()

        emulator.resize(newRows = 8, newCols = 100)
        Shadows.shadowOf(Looper.getMainLooper()).idle()

        val snap = emulator.snapshot.value
        assertTrue(snap.cursorRow in 0 until 8)
        assertTrue(snap.cursorCol in 0 until 100)
    }
}
