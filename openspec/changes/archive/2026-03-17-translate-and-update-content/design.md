# Design: translate-and-update-content

This document outlines the design decisions and structural changes for the translation, link updates, logo refresh, and navigation bug fix.

## Architectural Changes

### 1. Hero Quote Component (`src/components/home.astro`)
The intro section will be restructured to accommodate the new professional quote.
- **Original:**
  - `root@portfolio: # ./display_infrastructure.sh`
  - `Ingénieur en Cybersécurité & Infrastructure spécialisé dans les architectures Zero-Trust et l'automatisation.`
- **Revised Structure:**
  - Underneath the job title, a new `<blockquote>` element (or styled `p`) will be added for the quote.
  - **Text:** *"From IT to aviation, I thrive on complex systems, committed to the dual pillars of technical performance and security."*
  - **Styling:** 
    - Use a smaller font size relative to the job title.
    - Include large, decorative quotation marks (e.g., using `::before` or `::after` pseudo-elements or specific SVG icons).
    - Ensure it is visually grouped with the job title but distinct in weight.
    - Maintain the monochromatic, high-contrast aesthetic.

### 2. Tech Stack Refactor (`src/React/LogoWall.tsx`)
The static `technologies` array in `LogoWall.tsx` will be updated to reflect the new set of skills.
- **Removals:** Astro, TypeScript, Next.js, .NET.
- **Additions:** Kasm, Cisco Duo, Cloudflare, SafeLine, GLPI, Wireshark.
- **Assets:** External SVG/PNG URLs provided in `branding/spec.md` will be used as the `icon` source. 
- **Implementation Note:** If `react-icons` are not available for these specific tools, use standard `<img>` tags within the `technologies` array.

### 3. Navigation Highlighting Fix (`src/components/nav.astro`)
The Intersection Observer's behavior will be adjusted to ensure the first navigation item (`_WHOAMI`) is active by default or correctly triggered when the page is scrolled to the top.
- **Solution:** Add a scroll event listener (or modify the observer) to explicitly activate the first link if `window.scrollY` is below a certain threshold (e.g., 50px).
- **Update:** Ensure `observerOptions` uses a threshold that allows the `#home` section to trigger correctly even with the fixed navigation overlap.

## Design Rules & Patterns
- **Typing Effect Integration:** Ensure the new English text strings are correctly passed to the `TypingText` component.
- **Icon Consistency:** Use high-quality icons for Gitea and new technologies, maintaining the existing `opacity-60` and hover scaling effects.
- **Responsive Design:** Ensure the new hero quote is properly aligned and readable on mobile devices.

## Requirements Mapping
| Feature | Implementation | Component |
|---|---|---|
| Translation | Detailed mapping in `translation/spec.md` | Multiple components |
| Personal Links | Gitea (new icon), LinkedIn (updated URL), Email (updated) | `home.astro`, `contact.astro`, `footer.astro` |
| Tech Wall | Add/Remove technologies with URLs | `LogoWall.tsx` |
| Nav Fix | IntersectionObserver adjustment | `nav.astro` |
