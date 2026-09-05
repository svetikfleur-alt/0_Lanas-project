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
class ResizeScrollbackRegressionTest {
    private fun emulator(rows: Int = 12, cols: Int = 48): TerminalEmulatorImpl =
        TerminalEmulatorFactory.create(
            initialRows = rows,
            initialCols = cols,
            defaultForeground = Color.White,
            defaultBackground = Color.Black,
        ) as TerminalEmulatorImpl

    private fun idle() {
        Shadows.shadowOf(Looper.getMainLooper()).idle()
    }

    private fun allText(e: TerminalEmulatorImpl): String {
        val s = e.snapshot.value
        return (s.scrollback + s.lines).joinToString("\n") { it.text }
    }

    private fun occurrences(haystack: String, needle: String): Int {
        var from = 0
        var count = 0
        while (true) {
            val i = haystack.indexOf(needle, from)
            if (i < 0) return count
            count++
            from = i + needle.length
        }
    }

    @Test
    fun repeatedResizeKeepsHistoryAndDoesNotDuplicateMarkers() {
        val e = emulator()

        repeat(90) { i ->
            e.writeInput("R%03d unique-line\r\n".format(i).toByteArray())
        }
        e.writeInput("TEST_FINISHED\r\nPS C:\\Users\\maxin> ".toByteArray())
        idle()

        val sizes = listOf(
            8 to 80,
            22 to 34,
            10 to 72,
            18 to 42,
            12 to 48,
        )

        for ((rows, cols) in sizes) {
            e.resize(rows, cols)
            idle()

            val snap = e.snapshot.value
            assertEquals(rows, snap.rows)
            assertEquals(cols, snap.cols)
            assertTrue("scrollback unexpectedly empty after ${rows}x${cols}", snap.scrollback.isNotEmpty())

            val text = allText(e)
            for (marker in listOf("R010 unique-line", "R045 unique-line", "R080 unique-line", "TEST_FINISHED")) {
                assertEquals(
                    "$marker duplicated/lost after ${rows}x${cols}",
                    1,
                    occurrences(text, marker),
                )
            }
        }
    }

    @Test
    fun scrollStateCanStillReachOldestHistoryAfterResize() {
        val e = emulator(rows = 10, cols = 50)
        repeat(70) { i ->
            e.writeInput("H%03d scroll-history\r\n".format(i).toByteArray())
        }
        idle()

        e.resize(7, 78)
        idle()
        e.resize(16, 38)
        idle()
        e.resize(9, 62)
        idle()

        val snap = e.snapshot.value
        assertTrue("expected substantial scrollback", snap.scrollback.size > 20)

        val state = TerminalScreenState(snap)
        state.scrollToTop()
        assertEquals(snap.scrollback.size, state.scrollbackPosition)

        state.scrollBy(-5)
        assertEquals(snap.scrollback.size - 5, state.scrollbackPosition)

        state.scrollToBottom()
        assertEquals(0, state.scrollbackPosition)
    }

    @Test
    fun finalPromptExistsExactlyOnceAfterKeyboardLikeRowChanges() {
        val e = emulator(rows = 28, cols = 56)
        repeat(55) { i ->
            e.writeInput("K%03d filler\r\n".format(i).toByteArray())
        }
        e.writeInput("=== TEST FINISHED ===\r\nPS C:\\Users\\maxin> ".toByteArray())
        idle()

        for ((rows, cols) in listOf(16 to 56, 9 to 92, 20 to 46, 28 to 56)) {
            e.resize(rows, cols)
            idle()
        }

        val text = allText(e)
        assertEquals(1, occurrences(text, "=== TEST FINISHED ==="))
        assertEquals(1, occurrences(text, "PS C:\\Users\\maxin>"))
    }
}
