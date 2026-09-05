from pathlib import Path

TERM = Path("termlib")
CB = Path("cb")

# 1) Add an opt-in terminal mode that locks the native PTY grid after the first
# real layout. Later Android size/orientation/IME changes only refit the font.
p = TERM / "lib/src/main/java/org/connectbot/terminal/Terminal.kt"
s = p.read_text()

public_anchor = """    forcedSize: Pair<Int, Int>? = null,
    modifierManager: ModifierManager? = null,
"""
if public_anchor not in s:
    raise SystemExit("Public Terminal forcedSize anchor not found")
s = s.replace(
    public_anchor,
    """    forcedSize: Pair<Int, Int>? = null,
    lockAutoSizeAfterFirstLayout: Boolean = false,
    modifierManager: ModifierManager? = null,
""",
    1,
)

call_anchor = """        forcedSize = forcedSize,
        modifierManager = modifierManager,
"""
if call_anchor not in s:
    raise SystemExit("Terminal -> TerminalWithAccessibility call anchor not found")
s = s.replace(
    call_anchor,
    """        forcedSize = forcedSize,
        lockAutoSizeAfterFirstLayout = lockAutoSizeAfterFirstLayout,
        modifierManager = modifierManager,
""",
    1,
)

internal_anchor = """    forcedSize: Pair<Int, Int>? = null,
    modifierManager: ModifierManager? = null,
    forceAccessibilityEnabled: Boolean? = null,
"""
if internal_anchor not in s:
    raise SystemExit("Internal TerminalWithAccessibility forcedSize anchor not found")
s = s.replace(
    internal_anchor,
    """    forcedSize: Pair<Int, Int>? = null,
    lockAutoSizeAfterFirstLayout: Boolean = false,
    modifierManager: ModifierManager? = null,
    forceAccessibilityEnabled: Boolean? = null,
""",
    1,
)

state_anchor = """    var isDraggingHandle by remember(terminalEmulator) { mutableStateOf(false) }
    var calculatedFontSize by remember(terminalEmulator) { mutableStateOf(initialFontSize) }
"""
if state_anchor not in s:
    raise SystemExit("Font state anchor not found")
s = s.replace(
    state_anchor,
    """    var isDraggingHandle by remember(terminalEmulator) { mutableStateOf(false) }
    var calculatedFontSize by remember(terminalEmulator) { mutableStateOf(initialFontSize) }

    // When enabled, capture the first real UI-derived rows/cols and keep that
    // native terminal grid stable. Rotation and IME height changes then refit
    // only the font, avoiding libvterm reflow/scrollback mutations on every
    // Android configuration change.
    var lockedAutoSize by remember(terminalEmulator) { mutableStateOf<Pair<Int, Int>?>(null) }
""",
    1,
)

block_start = s.index("        // Calculate font size if forcedSize is specified")
block_end = s.index("        // Auto-scroll to bottom when new content arrives", block_start)
old_block = s[block_start:block_end]

new_block = """        // Capture one automatic PTY grid for this terminal session. Explicit
        // user-forced size still wins and remains fully supported.
        LaunchedEffect(
            lockAutoSizeAfterFirstLayout,
            forcedSize,
            availableWidth,
            availableHeight,
            baseCharWidth,
            baseCharHeight,
        ) {
            if (
                lockAutoSizeAfterFirstLayout &&
                forcedSize == null &&
                lockedAutoSize == null &&
                availableWidth > 0 &&
                availableHeight > 0 &&
                baseCharWidth > 0f &&
                baseCharHeight > 0f
            ) {
                val capturedCols = charsPerDimension(availableWidth, baseCharWidth)
                val capturedRows = charsPerDimension(availableHeight, baseCharHeight)
                if (capturedRows > 0 && capturedCols > 0) {
                    lockedAutoSize = capturedRows to capturedCols
                }
            }
        }

        val effectiveSize = forcedSize ?: lockedAutoSize

        // A forced or locked grid is fitted to the current Android viewport by
        // changing font size only. This is the key distinction from PTY resize.
        if (effectiveSize != null) {
            val (targetRows, targetCols) = effectiveSize
            LaunchedEffect(availableWidth, availableHeight, targetRows, targetCols) {
                if (availableWidth == 0 || availableHeight == 0) {
                    return@LaunchedEffect
                }

                val optimalSize = findOptimalFontSize(
                    targetRows = targetRows,
                    targetCols = targetCols,
                    availableWidth = availableWidth,
                    availableHeight = availableHeight,
                    minSize = minFontSize.value,
                    maxSize = maxFontSize.value,
                    typeface = typeface,
                    density = density.density,
                )
                calculatedFontSize = optimalSize.sp
            }
        } else {
            LaunchedEffect(initialFontSize) {
                if (calculatedFontSize != initialFontSize) {
                    calculatedFontSize = initialFontSize
                }
            }
        }

        // Resize the native PTY only when its logical grid changes. In locked
        // mode this happens once, when lockedAutoSize is first captured.
        LaunchedEffect(
            terminalEmulator,
            availableWidth,
            availableHeight,
            effectiveSize,
            baseCharWidth,
            baseCharHeight,
        ) {
            if (availableWidth == 0 || availableHeight == 0 || baseCharWidth <= 0f || baseCharHeight <= 0f) {
                return@LaunchedEffect
            }

            // Do not perform a transient automatic resize before the lock has
            // been captured; wait one composition instead.
            if (lockAutoSizeAfterFirstLayout && forcedSize == null && lockedAutoSize == null) {
                return@LaunchedEffect
            }

            val newCols =
                effectiveSize?.second ?: charsPerDimension(availableWidth, baseCharWidth)
            val newRows =
                effectiveSize?.first ?: charsPerDimension(availableHeight, baseCharHeight)

            val dimensions = terminalEmulator.dimensions
            if (newRows != dimensions.rows || newCols != dimensions.columns) {
                terminalEmulator.resize(newRows, newCols)

                if (selectionManager.mode != SelectionMode.NONE) {
                    selectionManager.clampToDimensions(newRows, newCols)
                }
            }
        }

        // Rendering always uses the logical PTY grid. In locked mode the font
        // changes to fit that stable grid inside portrait/landscape/IME bounds.
        val newCols =
            effectiveSize?.second ?: charsPerDimension(availableWidth, baseCharWidth)
        val newRows =
            effectiveSize?.first ?: charsPerDimension(availableHeight, baseCharHeight)

"""
s = s[:block_start] + new_block + s[block_end:]
p.write_text(s)

# 2) Enable the mode only for the ConnectBot console. Other termlib users keep
# upstream auto-resize behavior unless they explicitly opt in.
p = CB / "app/src/main/java/org/connectbot/ui/screens/console/ConsoleScreen.kt"
s = p.read_text()
cb_anchor = """            forcedSize = forceSize,
            modifierManager = bridge.keyHandler,
"""
if cb_anchor not in s:
    raise SystemExit("ConnectBot Terminal forcedSize call anchor not found")
s = s.replace(
    cb_anchor,
    """            forcedSize = forceSize,
            lockAutoSizeAfterFirstLayout = true,
            modifierManager = bridge.keyHandler,
""",
    1,
)
p.write_text(s)

# 3) Align termlib build tooling to ConnectBot composite build only.
p = TERM / "gradle/libs.versions.toml"
s = p.read_text()
if 'androidGradlePlugin = "9.2.1"' not in s:
    raise SystemExit("Expected termlib AGP 9.2.1 not found")
p.write_text(s.replace('androidGradlePlugin = "9.2.1"', 'androidGradlePlugin = "9.3.1"', 1))

p = TERM / "gradle/wrapper/gradle-wrapper.properties"
s = p.read_text()
if "gradle-9.5.1-bin.zip" not in s:
    raise SystemExit("Expected termlib Gradle 9.5.1 wrapper not found")
p.write_text(s.replace("gradle-9.5.1-bin.zip", "gradle-9.6.1-bin.zip", 1))

print("Applied stable native-grid rotation fix; no TerminalEmulator/libvterm runtime changes")
