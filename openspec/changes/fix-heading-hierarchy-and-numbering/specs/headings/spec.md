# headings Specification Delta

## MODIFIED Requirements

### Requirement: Single H1 Tag per Page
The `StartupSequence` component MUST use an `<h2>` for its primary "NEKOCORP_OS" text to ensure only the main site title on the homepage (`Home.astro`) uses an `<h1>`.
- **Constraint:** The visual appearance (font size, weight, color, etc.) of the "NEKOCORP_OS" text MUST remain identical to its current state.

#### Scenario: Homepage Heading Structure
- **GIVEN** the homepage loads.
- **WHEN** the `StartupSequence` is active.
- **THEN** it renders "NEKOCORP_OS" as an `<h2>`.
- **AND** the `Home` section renders "NEKOCORP" as an `<h1>`.

### Requirement: Dynamic CV Heading Level
The `CV` component MUST support a dynamic heading level for the user's name (`Léonard-Anton Llosa`) to adapt to different page contexts.
- **Default:** The name SHOULD default to `<h2>`.
- **Override:** It MUST allow being rendered as an `<h1>` via a `titleTag` prop.

#### Scenario: Rendering CV on Dedicated Page
- **GIVEN** a user navigates to `/cv`.
- **WHEN** the `CV` component is rendered.
- **THEN** it MUST render the name as an `<h1>`.

#### Scenario: Rendering CV on Homepage
- **GIVEN** a user scrolls to the `#cv` section on the homepage.
- **WHEN** the `CV` component is rendered.
- **THEN** it SHOULD render the name as an `<h2>`.

### Requirement: Nested Heading Hierarchy Alignment
When the `CV` section title is rendered as an `<h3>`, the internal sub-headings MUST be adjusted to maintain a correct logical outline.
- **Professional Headers:** Sub-sections within CV (e.g., EXPERIENCE, TECH STACK) MUST be `<h4>`.
- **Entry Titles:** Individual entry titles (e.g., Company name, University name) MUST be `<h5>`.

#### Scenario: Inspecting CV Section Outline
- **GIVEN** the CV section is rendered with an `<h3>` title.
- **THEN** all immediate children headers (EXPERIENCE, EDUCATION, etc.) MUST be `<h4>`.
- **AND** project/workplace names MUST be `<h5>`.
