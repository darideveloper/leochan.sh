# Proposal: Apply Glassmorphism Effects

## Why
The current UI for the "Ce que je fais ?", projects, and contact sections uses semi-transparent backgrounds (`bg-surface`) and subtle borders, but it lacks the visual depth and sophistication that a true glassmorphism effect would provide. Since the project branding is already "Cyber-Glass" and the navigation bar already uses `backdrop-blur-xl`, the rest of the UI feels slightly inconsistent and flat in comparison.

## Proposed Change
Implement glassmorphism effects across key UI elements to create a more cohesive and premium "Cyber-Glass" aesthetic. This involves adding `backdrop-filter: blur()` to containers that already have semi-transparent backgrounds and subtle borders.

### Target Components:
1.  **SkillsList.tsx (React):** Apply `backdrop-blur-md` to the skill category cards.
2.  **projects.astro (Astro):** Apply `backdrop-blur-sm` to the action buttons (GitHub and Preview).
3.  **contact.astro (Astro):** Apply `backdrop-blur-md` to form inputs and the text area.
4.  **nav.astro (Astro):** Ensure the navigation bar's glass effect is consistent and optimized.

## Capabilities
- **ui-glassmorphism:** A set of styling requirements for implementing frosted-glass effects across the portfolio components.

## Impact
- **Visuals:** Increased depth and modern "Cyber" look.
- **Consistency:** Aligns all major UI sections with the existing glassy navigation bar.
- **User Experience:** Better visual hierarchy and focus on interactive elements.
- **Performance:** Minimal impact on modern browsers; graceful fallback (solid colors) on older ones.

## Verification Plan
- **Visual Inspection:** Verify the blur effect is visible and aesthetic across different screen sizes.
- **Accessibility:** Check that text contrast remains high against the blurred background.
- **Performance:** Ensure smooth scrolling on mobile devices after applying filters.
- **Build Check:** Run `npm run build` to ensure no styling regressions.
