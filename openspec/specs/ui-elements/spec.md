# ui-elements Specification

## Purpose
TBD - created by archiving change rebrand-to-nekocorp. Update Purpose after archive.
## Requirements
### Requirement: Terminal-Style UI Elements
The site SHALL use terminal-inspired text and formatting for buttons and status indicators to maintain the "Cyber-Glass" immersion.

#### ADDED Scenario: Developer Attribution Footer
- **WHEN** viewing the site footer
- **THEN** a "Powered By" link MUST be visible.
- **AND** the link text MUST be `Powered By DariDeveloper`.
- **AND** the link MUST point to `https://www.darideveloper.com/`.
- **AND** the link MUST open in a new tab.

### Requirement: Numeric Log Headers
Section headers SHALL follow a numeric log format to reinforce the "Unix Terminal" aesthetic.

#### Scenario: Section Title Formatting
- **WHEN** rendering section titles (About, Projects, Academic, Professional, Contact)
- **THEN** the format MUST be `[0X] _TITLE` (e.g., `[01] _WHOAMI`, `[02] _NEKOCORP_INFRA`).

