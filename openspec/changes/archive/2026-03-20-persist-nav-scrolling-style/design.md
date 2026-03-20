# Design: Persist Navigation Scrolling Style

This design focuses on making the "glass" look of the navigation bar a persistent element while preserving the dynamic width change on scroll.

## Visual Design Refinement

### Current States
- **Top (initial):** `background: var(--background)` (solid dark), `border: none`, `border-radius: 0`.
- **Scrolled (>50px):** `background: rgba(20, 16, 26, 0.4)`, `border: rgba(255, 255, 255, 0.1)`, `border-radius: 9999px`, `backdrop-filter: blur(24px)`.

### New Persistent State
The base `nav` styles will now include:
- `background-color: rgba(20, 16, 26, 0.4)` (or a similar semi-transparent value).
- `backdrop-filter: blur(24px)`.
- `border: 1px solid rgba(255, 255, 255, 0.1)`.
- `border-radius: 9999px`.

### Width Behavior
The width transition (controlled by the `.scrolling` class) will remain:
- **Default:** `width: 80%` (max 1200px).
- **Scrolled:** `width: 640px`.

## Implementation Details

### CSS Refactor in `nav.astro`
Move the following properties from `nav.scrolling` to the base `nav` rule:
- `background-color: rgba(20, 16, 26, 0.4);`
- `backdrop-filter: blur(24px);`
- `border-color: rgba(255, 255, 255, 0.1);`
- `border-radius: 9999px;`

The `nav.scrolling` rule should then focus only on:
- `width: 640px;` (on desktop).
- `nav-logo` width/display adjustment.

### Mobile Considerations
On mobile, the header is at the bottom and has a slightly different background logic (`var(--surface)`). The design will ensure that mobile also adopts a consistent glass look if applicable, or preserves its existing "dock" feel if preferred, though the goal is generally high-level consistency. The user specifically mentioned "semi transparent background and round borders", so we'll ensure mobile follows this where appropriate (e.g. top-rounded borders for the bottom dock).
