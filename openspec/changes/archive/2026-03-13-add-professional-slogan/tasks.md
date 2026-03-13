# Tasks: Add Professional Slogan

## Implementation

1. **Modify `src/components/home.astro`**: Insert the slogan paragraph with appropriate Tailwind classes.
   - [x] Add `<p class="font-vcr text-md md:text-xl text-[var(--white-icon)] max-w-3xl leading-relaxed mt-6">` below the title/description div.
   - [x] Content: "Passionné par les systèmes complexes, de l'infrastructure informatique à l'aviation, je combine expertise technique et normes strictes de sécurité et de procédure."

## Validation

1. **Visual Verification**:
   - [x] Run `npm run dev` and check the home page.
   - [x] Verify that the slogan uses the "VCR OSD MONO" font.
   - [x] Verify responsiveness by resizing the browser.
   - [x] Confirm typography and colors match the design system.

2. **Code Quality**:
   - [x] Run `npm run lint` or `astro check` if available.
   - [x] Ensure no regressions in the layout of the `LogoWall` or `SkillsList`.
