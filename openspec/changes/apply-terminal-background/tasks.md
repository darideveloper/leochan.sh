# Tasks: Apply Terminal Background Effects

1.  **Preparation**
    - [ ] Locate and verify existence of `@public/background.webp`.
    - [ ] Create `src/components/TerminalBackground.astro` to encapsulate background layers.

2.  **Implementation**
    - [ ] **Task: Background Image Layer**
        - Implement the base image layer with the "Ken Burns" CSS animation.
        - Add `will-change: transform` and `opacity` controls.
    - [ ] **Task: CRT Overlays**
        - Implement scanlines as a CSS `linear-gradient` repeat.
        - Implement the radial vignette overlay with `#06020C` as the outer color.
    - [ ] **Task: Interference Effects**
        - Define CSS keyframes for the rare signal flicker and jitter (Steps-based).
        - Add mobile-specific `@media` queries to optimize or disable heavy animations.
    - [ ] **Task: Global Layout Integration**
        - Integrate the `TerminalBackground` component into `src/layouts/Layout.astro`.
        - Ensure it remains behind all other content (`z-index: -1`).

3.  **Validation**
    - [ ] Verify 60fps scrolling on desktop with the background active.
    - [ ] Verify that the background is correctly dimmed and doesn't hinder text readability.
    - [ ] Confirm mobile-specific optimizations (fixed background, reduced motion) work as intended.
