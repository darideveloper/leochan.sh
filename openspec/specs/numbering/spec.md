# numbering Specification

## Purpose
TBD - created by archiving change fix-heading-hierarchy-and-numbering. Update Purpose after archive.
## Requirements
### Requirement: Consistent Numeric Log Header Format
All main sections on the homepage MUST follow a standardized two-line header format using the `TypingText` component.
- **Line 1 (`h2`):** A small, "terminal-log" style label in the `[ ACTION ]` format.
- **Line 2 (`h3`):** The numbered section title in the `[0X] _TITLE` format.

#### Scenario: Rendering Home Section Header
- **GIVEN** the `Home` section on the homepage.
- **THEN** it renders `<h2>[ INITIALIZING ]</h2>`.
- **AND** it renders `<h3>[01] _WHOAMI</h3>`.

#### Scenario: Rendering CV Section Header
- **GIVEN** the `CV` section on the homepage.
- **THEN** it renders `<h2>[ RETRIEVING_BIO ]</h2>`.
- **AND** it renders `<h3>[02] _RESUME</h3>`.

### Requirement: Sequential Section Numbering
Main sections MUST be numbered sequentially based on their visual and navigation order.
- **Order:**
  - `[01] _WHOAMI` (Home)
  - `[02] _RESUME` (CV)
  - `[03] _NEKOCORP_INFRA` (Projects)
  - `[04] _ESTABLISH_CONNECTION` (Contact)

#### Scenario: Verifying Navigation Order Numbering
- **GIVEN** the navigation order: Home, CV, Projects, Contact.
- **WHEN** the section titles are rendered.
- **THEN** the index `[0X]` MUST increment sequentially from `01` to `04`.

### Requirement: Uniform Heading Level Usage
Main section titles MUST be consistently rendered as `<h3>` to avoid skipping heading levels and ensure a proper logical outline.

#### Scenario: Checking Heading Levels
- **GIVEN** any main homepage section (Home, CV, Projects, Contact).
- **WHEN** its primary title is rendered.
- **THEN** it MUST be an `<h3>`.

