# Change: Rebrand Portfolio to Nekocorp (Léonard-Anton)

## Why
The portfolio needs to be rebranded from "Oscar Hernandez" to "Léonard-Anton" (Nekocorp). The new brand focuses on Cybersecurity & Infrastructure Engineering with a "Cyber-Glass" and "Unix Terminal" aesthetic, reflecting the owner's student persona at TotalEnergies and his Nekocorp homelab.

## What Changes
- **Identity:** Update all instances of "Oscar Andres Hernandez Pineda" and "Oscar Hernandez" to "Léonard-Anton".
- **Brand Name:** Update logo and text references to "NEKOCORP // L.A.".
- **Role/Tagline:** Change "Software Developer" to "Cybersecurity & Infrastructure Engineer".
- **Hero Section:** Implement the terminal-style tagline: `root@portfolio: # ./display_infrastructure.sh`.
- **Section Titles:** Update to terminal-style numeric logs (e.g., `[01] _WHOAMI`).
- **SEO & Metadata:** Update page title, meta description, OpenGraph tags, and JSON-LD structured data (including `alternateName`).
- **Contact Info:** Update LinkedIn, GitHub, and Email addresses. Update geography from Colombia to France.
- **Backend:** Replace Formspree endpoint and verify Firebase project ownership for Firestore-linked components.
- **UX & Immersion:** Implement dynamic browser tab titles (`[DISCONNECTED]`) for inactivity.
- **UI Elements:** Use terminal-inspired text for buttons (`wget`, `cat`) and perform a full accessibility (alt/aria) sweep.
- **Assets:** Prepare references for new favicon and logo (Nekocorp logo).

## Impact
- **Affected specs:** `branding`, `slogan`, `translation`, `typography`, `ui-elements`.
- **Affected code:** `Layout.astro`, `index.astro`, `home.astro`, `nav.astro`, `footer.astro`, `contact.astro`, `projects.astro`, `package.json`, `README.md`, `LICENSE`, `CODE_OF_CONDUCT.md`, `firebase.ts`.
