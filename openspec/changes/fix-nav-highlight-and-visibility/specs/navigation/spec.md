# navigation Specification Delta

## MODIFIED Requirements

### Requirement: Layout Transitions
The navigation bar MUST transition smoothly between its initial and scrolling states without hiding the brand identity.

#### Scenario: Scrolling with brand identity
- **Given** the user is scrolling the page.
- **When** the navigation bar enters its scrolling state.
- **Then** the logo MUST remain visible and at its original opacity.
- **And** the navigation container MUST maintain its layout with items balanced (e.g., `justify-between`).

### Requirement: Logo Navigation Link
The navigation logo MUST function as a link that scrolls the user back to the top of the home page.

#### Scenario: Clicking the navigation logo
- **Given** the user is at any scroll position.
- **When** the user clicks the "NEKOCORP // L.A." logo.
- **Then** the viewport MUST smoothly scroll back to the `#home` section.
- **And** the `_WHOAMI` navigation link MUST be highlighted as active.

### Requirement: Navigation Link Selection
The navigation menu MUST correctly highlight the corresponding link as the user scrolls, supporting root-relative anchors.

#### Scenario: Selection of active section with root-relative anchor
- **Given** a navigation link with an `href` like `/#home`.
- **When** the corresponding section `#home` is in the active viewport zone.
- **Then** the link MUST receive the `active` class.
- **And** the selection logic MUST use fuzzy matching (`[href*='#']` or `[href$='#${id}']`) to support root-relative paths.

## ADDED Requirements

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
