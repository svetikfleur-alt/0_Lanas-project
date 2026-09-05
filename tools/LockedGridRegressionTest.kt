package org.connectbot.terminal

import androidx.activity.ComponentActivity
import androidx.compose.foundation.layout.size
import androidx.compose.runtime.mutableStateOf
import androidx.compose.ui.Modifier
import androidx.compose.ui.test.junit4.v2.createAndroidComposeRule
import androidx.compose.ui.unit.dp
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [34], qualifiers = "w1000dp-h1200dp-xhdpi")
class LockedGridRegressionTest {
    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    private fun textOccurrences(snapshot: TerminalSnapshot, needle: String): Int {
        val all = (snapshot.scrollback + snapshot.lines).joinToString("\n") { it.text }
        var count = 0
        var from = 0
        while (true) {
            val index = all.indexOf(needle, from)
            if (index < 0) return count
            count++
            from = index + needle.length
        }
    }

    @Test
    fun rotationLikeViewportChangesDoNotResizeNativeGridOrDuplicateHistory() {
        val emulator = TerminalEmulatorFactory.create(initialRows = 24, initialCols = 80)
        val landscape = mutableStateOf(false)
        var scrollController: ScrollController? = null

        composeTestRule.setContent {
            val width = if (landscape.value) 500.dp else 320.dp
            val height = if (landscape.value) 320.dp else 500.dp
            TerminalWithAccessibility(
                terminalEmulator = emulator,
                modifier = Modifier.size(width, height),
                lockAutoSizeAfterFirstLayout = true,
                onScrollControllerAvailable = { scrollController = it },
            )
        }

        composeTestRule.waitForIdle()
        composeTestRule.waitUntil { scrollController != null }

        val lockedDimensions = emulator.dimensions
        assertTrue(lockedDimensions.rows > 0)
        assertTrue(lockedDimensions.columns > 0)

        repeat(120) { i ->
            emulator.writeInput("GRID-%03d unique-history\r\n".format(i).toByteArray())
        }
        emulator.writeInput("=== LOCKED GRID END ===\r\nPS C:\\Users\\maxin> ".toByteArray())
        if (emulator is TerminalEmulatorImpl) {
            emulator.processPendingUpdates()
        }
        composeTestRule.waitForIdle()

        assertTrue((emulator as TerminalEmulatorImpl).snapshot.value.scrollback.size > 20)

        repeat(6) {
            composeTestRule.runOnUiThread {
                landscape.value = !landscape.value
            }
            composeTestRule.waitForIdle()

            assertEquals(
                "Native PTY dimensions changed during viewport/orientation change",
                lockedDimensions,
                emulator.dimensions,
            )

            val snap = emulator.snapshot.value
            assertEquals(1, textOccurrences(snap, "=== LOCKED GRID END ==="))
            assertEquals(1, textOccurrences(snap, "GRID-010 unique-history"))
            assertEquals(1, textOccurrences(snap, "GRID-060 unique-history"))
            assertEquals(1, textOccurrences(snap, "GRID-110 unique-history"))
        }

        val controller = scrollController!!
        controller.scrollToTop()
        composeTestRule.waitForIdle()
        assertEquals(controller.maxScrollback, controller.scrollbackPosition)

        controller.scrollBy(-7)
        composeTestRule.waitForIdle()
        assertEquals(controller.maxScrollback - 7, controller.scrollbackPosition)

        controller.scrollToBottom()
        composeTestRule.waitForIdle()
        assertEquals(0, controller.scrollbackPosition)
    }

    @Test
    fun unlockedModeStillResizesNormally() {
        val emulator = TerminalEmulatorFactory.create(initialRows = 24, initialCols = 80)
        val landscape = mutableStateOf(false)

        composeTestRule.setContent {
            val width = if (landscape.value) 500.dp else 320.dp
            val height = if (landscape.value) 320.dp else 500.dp
            TerminalWithAccessibility(
                terminalEmulator = emulator,
                modifier = Modifier.size(width, height),
                lockAutoSizeAfterFirstLayout = false,
            )
        }

        composeTestRule.waitForIdle()
        val portrait = emulator.dimensions

        composeTestRule.runOnUiThread {
            landscape.value = true
        }
        composeTestRule.waitForIdle()

        val rotated = emulator.dimensions
        assertTrue(
            "Control test expected ordinary auto-resize to change rows or columns",
            portrait.rows != rotated.rows || portrait.columns != rotated.columns,
        )
    }
}
