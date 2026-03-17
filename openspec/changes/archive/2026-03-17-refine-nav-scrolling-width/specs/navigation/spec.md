# Specification: Navigation Scrolling Refinement

## ADDED Requirements

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
The navigation bar MUST transition smoothly between its initial and scrolling states.
#### Scenario: Initial scroll from top
- Given the user is at the top of the page (`window.scrollY === 0`)
- When the user starts scrolling down
- Then the logo MUST fade out gracefully and the bar width MUST shrink according to the quartic ease-out function.
