# slogan Specification

## Purpose
TBD - created by archiving change add-professional-slogan. Update Purpose after archive.
## Requirements
### Requirement: Display Professional Slogan
The professional slogan **SHALL** highlight the engineer's expertise in infrastructure automation and cybersecurity.

#### MODIFIED Scenario: Slogan in Skills Section
- **Given** the user visits the home page.
- **When** the **Skills** section is rendered.
- **Then** a paragraph with the following text (or French equivalent) **MUST** be visible in the right-hand column (opposite the `SkillsList` on desktop):
  "From IT to aviation, I thrive on complex systems, committed to the dual pillars of technical performance and security."
- **And** the text **MUST** be wrapped in a relative container with large decorative quotes (`“` and `”`) as background elements.
- **And** the text **MUST** be styled with `text-[var(--white-icon)]` and have a font size between `1rem` (mobile) and `1.125rem` (desktop).
- **And** the Hero section **MUST NOT** display this slogan.

