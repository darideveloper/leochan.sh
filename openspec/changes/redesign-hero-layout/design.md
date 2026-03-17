# Design: Redesign Hero Layout

## Objective
Update the hero section of the portfolio to match the aesthetic and layout structure defined in `docs/new-hero.png`, while preserving the core brand identity of Léonard-Anton (NEKOCORP).

## Architectural Changes

### Layout Structure
- **Global Container:** A full-screen or nearly full-screen section with a relative position to allow for absolute background elements.
- **Background Visuals:** Large, blurred gradient blobs (purple/blue) to create depth, matching the reference image. This will complement the existing `LetterGlitch` background.
- **Main Title (Center-Left):** "NEKOCORP" in massive typography. This replaces the terminal-style command for a more impactful first impression.
- **Sub-title (Center-Right):** "Infrastructure & Security Agency" or similar, in a smaller but prominent font.
- **Bottom Section:**
    - **Left Column:** Brief professional description and a "Get Started" style link pointing to the contact section.
    - **Right Column:** A horizontal/flex container of "Stats" or "Core Competencies" cards, mimicking the "Win Awards" and "Experience" cards in the reference.

### Components Impacted
- `src/components/home.astro`: Significant refactoring of the hero section HTML/Tailwind classes.
- `src/components/nav.astro`: Minor alignment check to ensure the floating nav doesn't clash with the new hero top layout.

## Styling Decisions
- **Typography:** Use `Montserrat` for the main heading with extreme font-weight (900) and large size (e.g., `text-7xl` to `text-9xl`).
- **Glassmorphism:** Apply the existing glassmorphism theme to the bottom cards (blur, subtle border, translucency).
- **Gradients:** Use Tailwind's arbitrary values or custom CSS variables for the large glow effects (`bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl`).

## Alternative Approaches Considered
- **Keeping the Terminal Style:** While the user asked to match the image, keeping some terminal flavor (e.g., small "root@..." above the big title) might bridge the gap between old and new styles. However, the reference image is quite clean, so I'll prioritize a clean layout first.
- **Replacing LetterGlitch:** The reference image has its own background. I will try to overlay the new layout on top of `LetterGlitch` or adjust its intensity to maintain consistency with other sections.

## Verification Strategy
- **Visual Check:** Compare the rendered hero with `docs/new-hero.png`.
- **Responsive Audit:** Ensure the massive typography scales properly for mobile (e.g., using `clamp()` or mobile-specific font sizes).
- **Accessibility:** Verify contrast ratios for the text over the glowing background.
