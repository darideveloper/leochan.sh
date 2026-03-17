# hero Specification

## Purpose
Define the layout, typography, and visual components of the Hero section to ensure a visually dominant and engaging introduction to the application.

## Requirements
### Requirement: Massive Typography Title
The Hero section MUST feature a large, dominant title focal point utilizing heavy typography.

#### Scenario: Desktop View
- **GIVEN** a desktop viewport.
- **WHEN** the hero section is rendered.
- **THEN** the main heading MUST be vertically stacked.
- **AND** it MUST be massive.
- **AND** it MUST use a heavy font weight (`font-black` or `font-bold`).

### Requirement: Floating Stat Cards Layout
The secondary hero information MUST be presented as floating glassmorphic cards clustered in the bottom right of the hero view.

#### Scenario: Component Reuse
- **GIVEN** the bottom section of the hero (containing logos, skills, and image).
- **WHEN** rendered.
- **THEN** these elements MUST visually appear as distinct floating cards with `.cyber-glass` styling.
- **AND** they MUST be positioned towards the right side of the layout.
