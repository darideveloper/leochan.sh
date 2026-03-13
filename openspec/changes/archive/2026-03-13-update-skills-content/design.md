# Design: Update Skills Content and Refactor Component

## Technical Approach

### 1. New Dependency
- **`react-icons`:** Install `react-icons` to provide a wide range of professional icons for the new skill categories. This reduces code bloat from inline SVGs and makes it easier to change icons in the future.

### 2. Component Refactoring: `SkillsList.tsx`
- **Data-Driven Icons:** Replace the `CategoryIcons` object that contains raw JSX SVGs with a mapping to `react-icons` components (e.g., `SiCyberghost` for Cybersecurity, `SiDocker` for Infrastructure).
- **New Skill Categories:** Update the `skills` object with the 6 new categories:
    1.  Cybersecurity & Network Defense
    2.  Infrastructure & DevOps (The "Nekocorp" Stack)
    3.  Software Development
    4.  IT Service Management (ITSM)
    5.  Hardware & Edge Computing
    6.  Professional Profile (Soft Skills)
- **Maintain Translation:** Keep all content in French as per existing `translation` specifications.
- **Glassmorphism:** Preserve the current visual style (bg-surface, rounded-2xl, border-white-icon-tr).

### 3. Component Update: `logoWall.astro`
- **New Tools:** Add missing logos for tools like `docker`, `ansible`, `n8n`, `gitlab`, `python`, `php`, `postgresql`, `azure`, `microsoft`.
- **Marquee Maintenance:** Ensure the duplicate logic remains intact to preserve the infinite scrolling effect.

## Component Architecture

### `SkillsList.tsx`
- **State:** `openItem` (string | null) - tracks the expanded accordion item.
- **Rendering:** Maps over a `skills` object. Each entry renders an interactive card with an icon, title, and a list of items that slides down when active.

### `logoWall.astro`
- **Animation:** CSS `scroll` keyframes on a container with `will-change-transform` for 60 FPS performance.
- **Content:** Doubled technology array to allow for a seamless loop.

## Trade-offs and Considerations
- **Icon Library Weight:** `react-icons` can be large if not tree-shaken correctly by Vite. However, since the site is static (SSG), only the used icons will be bundled into the final JavaScript chunk for the `SkillsList` island.
- **Icon Consistency:** Ensure the chosen icons from different sets (Simple Icons, Font Awesome, etc.) within `react-icons` maintain a consistent visual weight and style.
