# navigation Specification Delta

## MODIFIED Requirements

### Requirement: Layout Transitions
The navigation bar MUST maintain a persistent glassmorphism look (semi-transparent background and rounded borders) while transitioning smoothly between its initial and scrolling widths.

#### Scenario: Persistent glass look at top of page
- **Given** the user is at the very top of the page.
- **When** the navigation bar is rendered.
- **Then** it MUST have a semi-transparent background (e.g., `rgba(20, 16, 26, 0.4)`).
- **And** it MUST have rounded borders (`border-radius: 9999px` for desktop).
- **And** it MUST have a subtle border color.

#### Scenario: Scrolling with width transition
- **Given** the user scrolls down.
- **When** the navigation bar enters its scrolling state.
- **Then** the `width` MUST transition from its base width (e.g., `80%`) to its scrolling width (e.g., `640px`).
- **And** the background, border, and rounded corners MUST remain consistent with the initial state.
