# typography Specification

## Purpose
TBD - created by archiving change update-typography-vcr-osd. Update Purpose after archive.
## Requirements
### Requirement: Font Usage and Preloading
The site SHALL use specific fonts to reinforce the "Cyber-Glass" and "Unix Terminal" aesthetic, ensuring high performance through preloading.

#### Scenario: VCR OSD MONO Usage
- **WHEN** rendering "system" text (taglines, status, numeric headers)
- **THEN** it MUST use the "VCR OSD MONO" font.

#### Scenario: Montserrat Usage
- **WHEN** rendering standard interface elements (navigation, buttons)
- **THEN** it MUST use the "Montserrat" variable font.

#### Scenario: Body Monospace Usage
- **WHEN** rendering descriptions, project text, or paragraph content
- **THEN** it MUST use a standard system monospace font (e.g., JetBrains Mono, Courier New).

#### Scenario: Font Preloading
- **WHEN** the page is requested
- **THEN** the browser MUST preload `VCR_OSD_MONO.ttf` and `montserrat-latin-wght-normal.woff2`.

### Requirement: Responsive Heading Sizes
Heading elements SHALL scale appropriately on mobile devices to prevent layout overflow and maintain readability.

#### Scenario: Mobile Font Size Reduction
- **WHEN** the viewport width is less than 640px (mobile)
- **THEN** h1, h2, and h3 tags SHALL have their font size reduced by approximately 20% compared to their default desktop sizes.

