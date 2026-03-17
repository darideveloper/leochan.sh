## MODIFIED Requirements
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
