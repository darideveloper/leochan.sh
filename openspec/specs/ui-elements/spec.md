# ui-elements Specification

## Purpose
TBD - created by archiving change rebrand-to-nekocorp. Update Purpose after archive.
## Requirements
### Requirement: Terminal-Style UI Elements
The site SHALL use terminal-inspired text and formatting for buttons and status indicators to maintain the "Cyber-Glass" immersion.

#### Scenario: Command-Style Buttons
- **WHEN** displaying the CV download button
- **THEN** the text MUST be `wget ./resume_fr.pdf`.

#### Scenario: Project Details Button
- **WHEN** displaying a button to view project details
- **THEN** the text MUST be `cat project_details.md`.

#### Scenario: System Status Footer
- **WHEN** viewing the site footer
- **THEN** a status line MUST be visible: `System Status: SECURE | Encryption: AES-256 | Protocol: HTTPS`.

### Requirement: Numeric Log Headers
Section headers SHALL follow a numeric log format to reinforce the "Unix Terminal" aesthetic.

#### Scenario: Section Title Formatting
- **WHEN** rendering section titles (About, Projects, Academic, Professional, Contact)
- **THEN** the format MUST be `[0X] _TITLE` (e.g., `[01] _WHOAMI`, `[02] _NEKOCORP_INFRA`).

