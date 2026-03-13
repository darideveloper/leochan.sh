# ui-glassmorphism Specification

## Purpose
TBD - created by archiving change apply-glassmorphism-effects. Update Purpose after archive.
## Requirements
### Requirement: Implement Frosted-Glass Effect (Glassmorphism)
All primary interactive containers MUST have a frosted-glass aesthetic. This SHALL be achieved through semi-transparent backgrounds and `backdrop-filter: blur()`.

#### Scenario: Apply blur to Skill Cards (SkillsList.tsx)
-   **Given** a skill category container in `SkillsList.tsx`
-   **When** rendered or hovered
-   **Then** it MUST have a `backdrop-blur-md` class applied.
-   **Then** it MUST maintain its semi-transparent `bg-surface` background.

#### Scenario: Apply blur to Action Buttons (projects.astro)
-   **Given** a project's GitHub or Preview button
-   **When** rendered
-   **Then** it MUST have a `backdrop-blur-sm` class applied.
-   **Then** it MUST have a `bg-surface` background and subtle border.

#### Scenario: Apply blur to Form Fields (contact.astro)
-   **Given** an `input` or `textarea` in the contact form
-   **When** rendered
-   **Then** it MUST have a `backdrop-blur-md` class applied.
-   **Then** it MUST have its `bg-surface` background and `border-[var(--white-icon-tr)]` border.

#### Scenario: Maintain Navigation Glass Effect (nav.astro)
-   **Given** the main navigation bar
-   **When** scrolling down the page
-   **Then** it MUST maintain its `backdrop-blur-xl` properties.
-   **Then** the `scrolling` state MUST use `bg-surface` for consistent glass aesthetic.

