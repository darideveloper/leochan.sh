# Tasks: Add Startup Boot Sequence

## Preparation
- [x] Review `src/layouts/Layout.astro` and `src/components/TerminalBackground.astro` to identify integration points.

## Component Implementation
- [x] Create `src/React/StartupSequence.tsx` with initial states (`boot`, `welcome`, `revealing`, `complete`).
- [x] Implement the `sessionStorage` check to determine if the sequence should be skipped.
- [x] Define the array of boot logs with associated brand-colored status indicators.
- [x] Implement the async log rendering logic with randomized `setTimeout` delays.

## Visual Styling
- [x] Style the overlay in `StartupSequence.tsx` using Tailwind CSS and `var(--background)`.
- [x] Integrate scanline and grain effects into the overlay for visual consistency.
- [x] Create the "Welcome to NEKOCORP_OS" centered screen.
- [x] Implement the `translate-y-full` or `opacity-0` transition logic for the final reveal.

## Integration
- [x] Import and place `StartupSequence` in `src/layouts/Layout.astro` (using `client:load`).
- [x] Add an `is:inline` script in `Layout.astro` to hide the main `body` content (or set `overflow: hidden`) while the startup sequence is active.
- [x] Fix the hydration "blink" by using a global `is-booting` CSS class and an inline script.

## UX & Accessibility
- [x] Add a "SKIP" button in the corner of the overlay.
- [x] Implement global keyboard listeners (`Space`, `Esc`) to trigger the skip logic.
- [x] Verify that `prefers-reduced-motion` skips the animation.

## Validation
- [x] Verify the boot sequence runs correctly on the first visit of a session.
- [x] Verify the boot sequence is skipped on page refresh (session persistence).
- [x] Verify the "Skip" button and keyboard shortcuts work as expected.
- [x] Confirm no layout shifts or "flashes" of content occur during hydration.
