# Design: Hero Quote Relocation

## Overview
The "NEKOCORP" personal portfolio currently uses a large branding logo and text in the Skills section and a professional quote in the Hero section. This proposal shifts the visual focus by:
1.  **Decluttering the Hero:** Removing the quote allows the "INFRASTRUCTURE & Security" main title to breathe and the small branding elements to be more prominent.
2.  **Contextualizing the Slogan:** Moving the professional quote to the Skills section pairs the engineer's mission statement directly with their technical stack.

## Architecture
- **Component Changes:** `src/components/home.astro` will be modified to restructure the `grid` and `flex` layouts in the Hero and Skills sections.

## Visual Balance
- **Hero Section:** After quote removal, the space will be evaluated for balance. On mobile, this reduces vertical scroll depth. On desktop, it creates a cleaner introduction.
- **Skills Section:** Replacing the large logo with a centered/aligned quote block will maintain the "Cyber-Glass" feel without the redundant large branding.

## Responsive Design
- **Mobile:** The quote block in the Skills section will be stacked (usually above or below the `SkillsList` depending on the desired flow, but given the current code it's in a `flex-col` so it will follow naturally).
- **Desktop:** It will occupy the right half of the `lg:flex-row` layout in the Skills section.
