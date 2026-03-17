## ADDED Requirements
### Requirement: Localized Hero Fluid Background
The background of the Hero section MUST feature localized fluid, organic "blobs" that sit above the global site background and below the hero content.

#### Scenario: Rendering Hero Section
- **GIVEN** the hero section in `home.astro`.
- **WHEN** rendered.
- **THEN** it MUST display at least two large animated radial gradients (one `--primary`, one `--secondary`).
- **AND** it MUST be layered above the global CRT/scanline background (`TerminalBackground.astro`).
- **AND** these gradients MUST slowly move via CSS transforms.

### Requirement: Global Background Preservation
The global terminal-inspired background MUST remain unchanged for all other site sections.

#### Scenario: Navigating to About or Projects
- **GIVEN** a user navigating away from the Hero section.
- **WHEN** viewing the About or Projects sections.
- **THEN** the `TerminalBackground.astro` CRT/scanline effects MUST be fully visible.
- **AND** the fluid hero blobs MUST NOT be visible.
