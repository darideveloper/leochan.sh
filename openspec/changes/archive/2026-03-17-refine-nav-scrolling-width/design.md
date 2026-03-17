# Design: Navigation Scrolling Refinement

## Architectural Reasoning
The current navigation layout uses a JS-calculated width that shrinks from `80%` of `window.innerWidth` to a fixed `528px`. This fixed value was originally designed for three navigation items. With four items, the combined width of the text and their spacing exceeds this minimum, causing layout breakage.

### Width Calculation
The formula for the dynamic width is:
`currentWidth = maxWidth - (maxWidth - minWidth) * easeProgress`

By increasing `minWidth` from `528` to `640`, we provide 112px of additional horizontal space.

### Spacing Strategy
The navigation items currently have:
- `md:space-x-6` (1.5rem / 24px)
- `md:gap-12` (3rem / 48px)
- **Total Gap per item:** 72px.

For 4 items, we have 3 gaps.
Total Gap Width: 3 * 72 = 216px.
With side padding `px-6` (2 * 24 = 48px), total non-text width is 264px.
Remaining for text in 528px: 264px.

**Optimization:**
- Remove `md:space-x-6`.
- Change `md:gap-12` to `md:gap-8` (2rem / 32px).
- **New Total Gap per item:** 32px.
- Total Gap Width: 3 * 32 = 96px.
- With side padding `px-6` (48px), total non-text width is 144px.
- Remaining for text in 640px: 496px (plenty for 4 labels).

## Trade-offs
- **Wider Minimal Pill:** The floating pill will be slightly wider on desktop than before (640px vs 528px). This is a necessary trade-off for content integrity.
- **Dynamic Width Dependency:** The JS-calculated width remains dependent on `window.innerWidth`. While this could be moved to CSS `clamp()`, keeping it in JS is more consistent with the existing implementation and allows for the custom quartic easing function.
