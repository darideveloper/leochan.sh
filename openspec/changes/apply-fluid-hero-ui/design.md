# Design: Fluid Hero UI

This design addresses the transition from a terminal aesthetic to a fluid, glassmorphic UI exclusively in the hero section, ensuring it aligns with the overall "Cyber-Glass" aesthetic of the project.

## Localized Background Strategy (`home.astro`)
Instead of refactoring the global `TerminalBackground.astro`, we will introduce a localized `FluidLayer` div within `src/components/home.astro`. 
- This layer will sit behind the Hero content but *above* the global `TerminalBackground`.
- It will feature large, animated `--primary` and `--secondary` radial gradients (blobs) using smooth CSS animations.
- The global CRT/scanline effects from `TerminalBackground.astro` will still be subtly visible underneath, ensuring consistent branding across the site.
- Key performance guardrail: use hardware-accelerated `transform: translate3d` for the blob movement instead of large `blur()` filters.

## Hero Layout Strategy (`home.astro`)
The HTML structure inherently matches the reference design. We only need to adjust Tailwind utility classes:
- **Typography**: Convert the `h1` container from `flex-row` to `flex-col`. Enhance the text size using `text-5xl md:text-7xl lg:text-[8rem] font-black uppercase` for desktop, with responsive fallbacks to prevent layout breakage.
- **Glassmorphism Cards**: Transform the bottom content section. By applying the project's standard `.cyber-glass` class to the wrappers of `<SkillsList />`, `<LogoWall />`, and the Image, we maintain stylistic unity while creating the floating "stat card" effect seen in `new-hero.png`.
