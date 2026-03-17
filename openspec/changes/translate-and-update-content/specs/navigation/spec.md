# navigation Specification Delta

## MODIFIED Requirements
### Requirement: Navigation Link Selection
The navigation menu MUST correctly highlight the corresponding link as the user scrolls, including the first item when at the very top.

#### Scenario: Selection of WHOAMI link at top of page
- **Given** the user is at the scroll position 0.
- **When** the page loads or the user scrolls to the top.
- **Then** the `_WHOAMI` navigation link MUST be active.
- **And** it MUST show the corresponding active styles (e.g., indicator dot).
