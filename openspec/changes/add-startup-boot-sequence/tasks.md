# Tasks: Add Startup Boot Sequence

## Preparation
- [ ] Review `src/layouts/Layout.astro` and `src/components/TerminalBackground.astro` to identify integration points.

## Component Implementation
- [ ] Create `src/React/StartupSequence.tsx` with initial states (`boot`, `welcome`, `revealing`, `complete`).
- [ ] Implement the `sessionStorage` check to determine if the sequence should be skipped.
- [ ] Define the array of boot logs with associated brand-colored status indicators.
- [ ] Implement the async log rendering logic with randomized `setTimeout` delays.

## Visual Styling
- [ ] Style the overlay in `StartupSequence.tsx` using Tailwind CSS and `var(--background)`.
- [ ] Integrate scanline and grain effects into the overlay for visual consistency.
- [ ] Create the "Welcome to NEKOCORP_OS" centered screen.
- [ ] Implement the `translate-y-full` or `opacity-0` transition logic for the final reveal.

## Integration
- [ ] Import and place `StartupSequence` in `src/layouts/Layout.astro` (using `client:load`).
- [ ] Add an `is:inline` script in `Layout.astro` to hide the main `body` content (or set `overflow: hidden`) while the startup sequence is active.

## UX & Accessibility
- [ ] Add a "SKIP" button in the corner of the overlay.
- [ ] Implement global keyboard listeners (`Space`, `Esc`) to trigger the skip logic.
- [ ] Verify that `prefers-reduced-motion` skips the animation.

## Validation
- [ ] Verify the boot sequence runs correctly on the first visit of a session.
- [ ] Verify the boot sequence is skipped on page refresh (session persistence).
- [ ] Verify the "Skip" button and keyboard shortcuts work as expected.
- [ ] Confirm no layout shifts or "flashes" of content occur during hydration.
