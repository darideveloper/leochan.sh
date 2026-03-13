# Capability: Terminal Background Effects

This capability defines the visual and performance requirements for the terminal-style background using `@public/background.webp`.

## ADDED Requirements

### Requirement: CRT-Inspired Visual Layers
The background MUST consist of multiple visual layers that simulate a CRT monitor feed.

#### Scenario: Desktop Viewing
- **GIVEN** a desktop screen size (>1024px).
- **WHEN** the user visits any page.
- **THEN** a background container is visible with the `background.webp` image at `opacity: 0.3-0.5`.
- **AND** a scanline pattern is visible as a fixed horizontal overlay.
- **AND** a radial vignette is visible around the viewport edges.

### Requirement: Ken Burns Panning Animation
The background image MUST perform a slow, continuous zoom-and-pan animation to add depth.

#### Scenario: Continuous Subtle Motion
- **GIVEN** a desktop or tablet viewport.
- **WHEN** the page is loaded.
- **THEN** the background image slowly zooms and pans (Ken Burns effect) over a 20-40s loop.
- **AND** the animation uses CSS `transform` for GPU acceleration.

### Requirement: Signal Interference Flicker
The background MUST occasionally show brief signal interference effects to match the cybersecurity aesthetic.

#### Scenario: Random Technical Glitch
- **GIVEN** the terminal background is active.
- **WHEN** a randomized CSS animation cycle is triggered (e.g., every 15s).
- **THEN** the background image briefly flickers (opacity shift or 1px jitter) for no more than 150ms.

### Requirement: Performance and Mobile Optimization
The background MUST be optimized for low-power and mobile devices to preserve battery and maintain smoothness.

#### Scenario: Mobile Viewing or Reduced Motion
- **GIVEN** a mobile viewport (<768px) OR the user has `prefers-reduced-motion: reduce`.
- **WHEN** the background is rendered.
- **THEN** the Ken Burns animation is either slowed down by 50% or disabled entirely to save battery.
- **AND** the background image is pinned or set to `fixed` to avoid recalculating layout on scroll.
- **AND** the scanline density is reduced if needed for better contrast.
