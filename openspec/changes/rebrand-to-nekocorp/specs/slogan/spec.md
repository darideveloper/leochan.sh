## MODIFIED Requirements
### Requirement: Display Professional Slogan
The portfolio's Hero section **MUST** feature a professional slogan highlighting the engineer's expertise in infrastructure automation and cybersecurity.

#### Scenario: Slogan in Hero Section
- **Given** the user visits the home page.
- **When** the Hero section is rendered.
- **Then** a paragraph with the following text (or French equivalent) **MUST** be visible:
  "Portfolio of Léonard-Anton, an IT & Cybersecurity student specializing in Zero-Trust architectures, infrastructure automation, and enterprise-grade systems. Explore the Nekocorp homelab and professional automation workflows at TotalEnergies."
- **And** the text **MUST** use the `font-vcr` class ("VCR OSD MONO" font).
- **And** the text **MUST** be styled with `text-[var(--white-icon)]` and have a font size between `1rem` (mobile) and `1.25rem` (desktop).
- **And** it **MUST** be positioned below the primary tagline and above the social links.
