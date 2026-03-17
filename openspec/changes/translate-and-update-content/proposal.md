# Proposal: translate-and-update-content

Translate the entire website to English, update personal links (GitHub to Gitea), refresh the tech stack logos, and fix a navigation selection bug.

## Problem
The website is currently in French, but the owner wants to target an English-speaking audience. Additionally, some professional links (GitHub, LinkedIn) are outdated or need replacement with self-hosted alternatives (Gitea). The tech stack logos also need to reflect the owner's current skill set by removing unused technologies and adding new ones. Finally, there is a minor UX bug where the first navigation item (`_WHOAMI`) is not highlighted when the user is at the very top of the page.

## Proposed Changes
### 1. Translation to English
- Translate all visible text from French to English in components: `nav.astro`, `home.astro`, `projects.astro`, `contact.astro`, `footer.astro`, and `SkillsList.tsx`.
- Update SEO metadata in `Layout.astro`.

### 2. Personal Info & Links Updates
- **Gitea:** Replace GitHub link with `https://git.nekocorp.fr/leo` and use the Gitea icon.
- **LinkedIn:** Update link to `https://www.linkedin.com/in/leonard-anton-llosa/`.
- **Email:** Update to `leonard+leochan.sh@nekocorp.fr`.
- **Intro Quote:** Add a new professional quote in the hero section: *"From IT to aviation, I thrive on complex systems, committed to the dual pillars of technical performance and security."*

### 3. Tech Stack & Logos Refresh
- **Remove:** .NET, Astro, TypeScript, Next.js.
- **Add:** Kasm Workspaces, Cisco Duo, Cloudflare, SafeLine, GLPI, Wireshark.

### 4. Navigation Fix
- Adjust the Intersection Observer in `nav.astro` to ensure the `#home` (`_WHOAMI`) link is active when at the scroll top or when the home section is visible.

## Impact
- **Global Reach:** The portfolio becomes accessible to an international audience.
- **Professional Accuracy:** Links and tech stack reflect the owner's actual tools and self-hosted infrastructure.
- **UX Improvement:** Better navigation highlighting.
