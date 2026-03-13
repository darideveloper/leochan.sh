# slogan Specification

## Purpose
TBD - created by archiving change add-professional-slogan. Update Purpose after archive.
## Requirements
### Requirement: Display Professional Slogan
The portfolio's Hero section **MUST** feature a professional slogan highlighting the developer's expertise in complex systems and security.

#### Scenario: Slogan in Hero Section
- **Given** the user visits the home page.
- **When** the Hero section is rendered.
- **Then** a paragraph with the following text (or French equivalent) **MUST** be visible:
  "Passionné par les systèmes complexes, de l'infrastructure informatique à l'aviation, je combine expertise technique et normes strictes de sécurité et de procédure."
- **And** the text **MUST** use the `font-vcr` class ("VCR OSD MONO" font).
- **And** the text **MUST** be styled with `text-[var(--white-icon)]` and have a font size between `1rem` (mobile) and `1.25rem` (desktop).
- **And** it **MUST** be positioned below the primary title and above the social links.

