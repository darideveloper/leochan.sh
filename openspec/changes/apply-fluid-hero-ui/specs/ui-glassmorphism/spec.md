## MODIFIED Requirements
### Requirement: Implement Frosted-Glass Effect (Glassmorphism)
All primary interactive containers MUST have a frosted-glass aesthetic. This SHALL be achieved through semi-transparent backgrounds and `backdrop-filter: blur()`.

#### Scenario: Apply blur to Hero Stat Cards (home.astro)
-   **Given** the wrappers for the `SkillsList`, `LogoWall`, and NEKOCORP image in the hero section.
-   **When** rendered.
-   **Then** they MUST have the `.cyber-glass` class applied.
-   **AND** they MUST feature rounded corners and padding to simulate a floating card.
