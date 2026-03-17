# hero-layout Specification Delta

## MODIFIED Requirements

### Requirement: Hero Layout
The hero section SHALL provide a high-impact visual representation of the NEKOCORP brand, emphasizing infrastructure and cybersecurity expertise.

#### Scenario: Massive Typography (New Hero)
- **WHEN** the user visits the home page
- **THEN** the hero section MUST display the word "NEKOCORP" in massive, bold typography (e.g., `text-7xl` to `text-9xl`) to dominate the visual field, as shown in `docs/new-hero.png`.
- **THEN** it MUST be accompanied by a smaller but prominent subtitle (e.g., "Infrastructure & Security Agency").

#### Scenario: Glowing Gradient Background (New Hero)
- **WHEN** rendering the hero background
- **THEN** large, blurred purple/blue gradient blobs MUST be absolutely positioned to create a "glassmorphism" depth effect, matching the visual style of `docs/new-hero.png`.

#### Scenario: Hero Card Layout (Bottom Right)
- **WHEN** displaying the bottom-right part of the hero section
- **THEN** three info/stats cards MUST be presented, utilizing the project's glassmorphism style (e.g., `backdrop-blur`, `border-white/10`).
- **THEN** the cards MUST showcase core competencies: "Zero Trust", "Infrastructure Automation", and "SecOps Excellence".

#### Scenario: CTA and Description (Bottom Left)
- **WHEN** displaying the bottom-left part of the hero section
- **THEN** a brief professional description SHALL be placed next to a "Get Started >>" call-to-action link.
