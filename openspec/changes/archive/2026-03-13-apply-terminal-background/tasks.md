# Tasks: Apply Terminal Background Effects

1.  **Preparation**
    - [x] Locate and verify existence of `@public/background.webp`.
    - [x] Create `src/components/TerminalBackground.astro` to encapsulate background layers.

2.  **Implementation**
    - [x] **Task: Background Image Layer**
        - Implement the base image layer with the "Ken Burns" CSS animation.
        - Add `will-change: transform` and `opacity` controls.
    - [x] **Task: CRT Overlays**
        - Implement scanlines as a CSS `linear-gradient` repeat.
        - Implement the radial vignette overlay with `#06020C` as the outer color.
    - [x] **Task: Interference Effects**
        - Define CSS keyframes for the rare signal flicker and jitter (Steps-based).
        - Add mobile-specific `@media` queries to optimize or disable heavy animations.
    - [x] **Task: Global Layout Integration**
        - Integrate the `TerminalBackground` component into `src/layouts/Layout.astro`.
        - Ensure it remains behind all other content (`z-index: -1`).

3.  **Validation**
    - [x] Verify 60fps scrolling on desktop with the background active.
    - [x] Verify that the background is correctly dimmed and doesn't hinder text readability.
    - [x] Confirm mobile-specific optimizations (fixed background, reduced motion) work as intended.
