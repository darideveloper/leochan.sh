# Design: Glassmorphism Implementation

## Architecture & Logic
The glassmorphism effect is implemented purely through CSS using Tailwind CSS utility classes. The design relies on three core visual properties:

1.  **Transparency:** Semi-transparent background colors (e.g., `bg-surface` which is `#14101A9C`) allow the underlying content or background gradient to show through.
2.  **Blur:** The `backdrop-blur-*` utility adds the "frosted glass" effect by blurring the elements visible behind the container.
3.  **Borders:** Subtle, semi-transparent borders (`border-[var(--border-subtle)]` or similar) define the edges of the glass element and enhance the perception of depth.

### Component-Specific Adjustments

#### 1. SkillsList.tsx (React)
- **Target:** The `div` containing the category header and icon.
- **Current Classes:** `bg-surface rounded-2xl border border-[var(--white-icon-tr)]`
- **Change:** Add `backdrop-blur-md`.
- **Logic:** This creates a frosted-glass card effect for each skill category. The transition should maintain the blur on hover.

#### 2. projects.astro (Astro)
- **Target:** The individual project action buttons (GitHub and Preview).
- **Current Classes:** `bg-surface border border-1 border-[var(--white-icon-tr)] rounded-xl`
- **Change:** Add `backdrop-blur-sm`.
- **Logic:** Small elements like buttons benefit from a lighter blur (`sm`) to keep them crisp while still appearing glassy.

#### 3. contact.astro (Astro)
- **Target:** `input` and `textarea` fields.
- **Current Classes:** `bg-surface border border-[var(--white-icon-tr)] rounded-lg`
- **Change:** Add `backdrop-blur-md`.
- **Logic:** Makes the form inputs look like frosted glass panels. The `focus` ring will remain as the primary interaction indicator.

#### 4. nav.astro (Astro)
- **Target:** The main `nav` element.
- **Current State:** Already has `backdrop-blur-xl`.
- **Change:** Ensure that the `scrolling` class also maintains appropriate glass properties and consistent border styling.

## Trade-offs
- **Performance:** While `backdrop-filter` is hardware-accelerated, heavy use can affect performance. By applying it only to specific card-sized elements and inputs, we minimize this risk.
- **Accessibility:** Text readability is paramount. The current `bg-surface` color is dark enough that white text on top remains highly legible even with the blur.

## Alternatives Considered
- **SVG Filters:** More complex to implement and potentially less performant than native CSS `backdrop-filter`.
- **Pre-rendered Assets:** Not flexible for dynamic layouts or varying screen sizes.

## Constraints
- **Tailwind Version:** Must be compatible with the current project's Tailwind setup.
- **Static Output:** All styles must be resolvable at build-time.
