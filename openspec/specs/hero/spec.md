# hero Specification

## Purpose
Define the layout, typography, and visual components of the Hero section to ensure a visually dominant and engaging introduction to the application.
## Requirements
### Requirement: Massive Typography Title
The Hero section **SHALL** feature a large, dominant title focal point utilizing the portfolio owner's name.

#### MODIFIED Scenario: Display Portfolio Owner Name
- **GIVEN** a viewport of any size.
- **WHEN** the hero section is rendered.
- **THEN** the main heading MUST display "LEONARD-ANTON" in a single line.
- **AND** it MUST be massive.
- **AND** it MUST use a heavy font weight (`font-black` or `font-bold`).
- **AND** it MUST be responsive and scale to fit the viewport width.

#### MODIFIED Scenario: Remove Secondary Tagline
- **GIVEN** the hero section.
- **WHEN** rendered.
- **THEN** it MUST NOT feature the "& Security." subtitle directly below the main title.

### Requirement: Floating Stat Cards Layout
The secondary hero information MUST be presented as floating glassmorphic cards clustered in the bottom right of the hero view.

#### Scenario: Component Reuse
- **GIVEN** the bottom section of the hero (containing logos, skills, and image).
- **WHEN** rendered.
- **THEN** these elements MUST visually appear as distinct floating cards with `.cyber-glass` styling.
- **AND** they MUST be positioned towards the right side of the layout.

