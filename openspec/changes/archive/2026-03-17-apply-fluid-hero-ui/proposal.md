# Proposal: Apply Fluid Hero UI

Update the Hero section to follow the new fluid gradient and prominent glassmorphism aesthetic provided in the `new-hero.png` reference design, while maintaining the global site-wide aesthetic for other sections.

The current "Terminal/Cyberpunk" aesthetic is being phased out exclusively in the hero view. To achieve this while strictly minimizing HTML updates:
- A localized "Fluid Gradient" layer will be added behind the Hero content in `src/components/home.astro`, utilizing organic, animated CSS radial gradients (blobs).
- The global `TerminalBackground.astro` will remain intact to preserve the CRT/scanline aesthetic for the rest of the site, ensuring the new hero update matches the general "Cyber-Glass" page style.
- The hero typography will be restructured via Tailwind classes to display a massive focal title.
- Existing components (`LogoWall`, `SkillsList`, `img`) in the lower hero section will be wrapped in the existing `.cyber-glass` aesthetic and repositioned into floating "stat cards".

These updates will provide a modern, creative agency look exclusively through CSS and class utility adjustments, maximizing component reuse and ensuring a functional, high-performance UI.
