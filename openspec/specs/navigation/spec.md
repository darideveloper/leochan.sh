# navigation Specification

## Purpose
Define the visual and behavioral standards for the site's navigation bar, including state transitions, width calculations, and active link highlighting across different devices.
## Requirements
### Requirement: Navigation Width Calculation
The navigation header MUST have a minimum width of `640px` when the user has scrolled significantly.
#### Scenario: Scrolling deep into the page
- Given the user is on a desktop device (width >= 768px)
- When the user scrolls past `1000px`
- Then the navigation bar width MUST stay at exactly `640px`.

### Requirement: Navigation Item Spacing
Navigation items MUST have a balanced spacing that prevents overflow in the minimal pill version.
#### Scenario: Desktop navigation layout
- Given the navigation header is in its scrolling state
- When the user views the navigation items
- Then the horizontal spacing MUST be `2rem` (`md:gap-8`) and MUST NOT have redundant `space-x` classes.

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

### Requirement: Logo Navigation Link
The navigation logo MUST function as a link that scrolls the user back to the top of the home page.

#### Scenario: Clicking the navigation logo
- **Given** the user is at any scroll position.
- **When** the user clicks the "NEKOCORP // L.A." logo.
- **Then** the viewport MUST smoothly scroll back to the `#home` section.
- **And** the `_WHOAMI` navigation link MUST be highlighted as active.

### Requirement: Navigation Link Selection
The navigation menu MUST correctly highlight the corresponding link as the user scrolls, including the first item when at the very top, supporting root-relative anchors.

#### Scenario: Selection of WHOAMI link at top of page
- **Given** the user is at the scroll position 0.
- **When** the page loads or the user scrolls to the top.
- **Then** the `_WHOAMI` navigation link MUST be active.
- **And** it MUST show the corresponding active styles (e.g., indicator dot).

#### Scenario: Selection of active section with root-relative anchor
- **Given** a navigation link with an `href` like `/#home`.
- **When** the corresponding section `#home` is in the active viewport zone.
- **Then** the link MUST receive the `active` class.
- **And** the selection logic MUST use fuzzy matching (`[href*='#']` or `[href$='#${id}']`) to support root-relative paths.

### Requirement: Thematic Highlight Styling
The active navigation highlight MUST use centralized theme variables for its appearance.

#### Scenario: Active link styling
- **Given** an active navigation link.
- **When** the link is rendered.
- **Then** its text color MUST be driven by a centralized CSS variable (e.g., `--nav-active-color`).

### Requirement: Consistent Mobile Spacing
The application MUST ensure consistent spacing at the bottom of the viewport when the mobile navigation is active.

#### Scenario: Mobile viewport spacing
- **Given** a mobile viewport.
- **When** the bottom navigation bar is rendered.
- **Then** the body padding MUST be managed via a centralized CSS variable (e.g., `--mobile-nav-height`).

