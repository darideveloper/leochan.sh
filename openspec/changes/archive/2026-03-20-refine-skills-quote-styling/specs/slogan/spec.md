# slogan Specification (Delta)

## MODIFIED Requirements
### Requirement: Display Professional Slogan
The professional slogan **SHALL** highlight the engineer's expertise in infrastructure automation and cybersecurity.

#### MODIFIED Scenario: Slogan in Skills Section
- **Given** the user visits the home page.
- **When** the **Skills** section is rendered.
- **Then** a paragraph with the following text (or French equivalent) **MUST** be visible in the right-hand column:
  "From IT to aviation, I thrive on complex systems, committed to the dual pillars of technical performance and security."
- **And** the text **MUST** be styled with `text-[var(--white)]` (pure white).
- **And** the font size **MUST** be approximately 1.5rem (`text-2xl`) on mobile and 2.25rem (`text-4xl`) on desktop.
- **And** it **MUST** be wrapped in a relative container with large decorative quotes (`“` and `”`) as background elements.
