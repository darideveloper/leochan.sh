# branding Specification

## Purpose
TBD - created by archiving change apply-branding-logo. Update Purpose after archive.
## Requirements
### Requirement: Metadata and SEO Logo Integration
The site SHALL use the branding logo for favicon, OpenGraph metadata, and structured data to ensure consistent visual identity across search engines and social platforms.

#### Scenario: Favicon Implementation
- **WHEN** the site is loaded in a browser
- **THEN** it MUST use the Nekocorp "Cat + Binary" icon as `/favicon.png`.

#### Scenario: OpenGraph Image
- **WHEN** the site URL is shared on social media
- **THEN** the `og:image` meta tag MUST point to the new branded OG image `/og.image.png`.

#### Scenario: Structured Data Image
- **WHEN** search engines parse the `Person` JSON-LD schema
- **THEN** the `image` property MUST point to the new branded logo `/logo-leochan.png`.

### Requirement: Header Logo Integration
The navigation bar SHALL display the branding logo to reinforce professional identity and provide a return-to-home shortcut.

#### Scenario: Navigation Logo Visibility
- **WHEN** viewing the site on desktop
- **THEN** the branding logo (NEKOCORP // L.A.) MUST be visible at the start of the navigation menu.

#### Scenario: Navigation Logo Link
- **WHEN** a user clicks the branding logo in the navigation bar
- **THEN** it MUST navigate the user to the `#home` section.

### Requirement: Footer Logo Integration
The footer SHALL prominently feature the branding logo to maintain visual consistency at the end of the page content.

#### Scenario: Footer Logo Placement
- **WHEN** a user scrolls to the bottom of the page
- **THEN** the branding logo (NEKOCORP // L.A.) MUST be displayed prominently above or alongside the social media links.

### Requirement: Tech Stack & Skillset
The branding MUST reflect the owner's actual skillset and toolset.

#### Scenario: Updating Tech Wall
- **Given** the owner's current expertise.
- **When** the `LogoWall` is rendered.
- **Then** the following technologies MUST be REMOVED: .NET, Astro, TypeScript, Next.js.
- **And** the following technologies MUST be ADDED with their respective icons:
  - **Gitea:** `https://download.logo.wine/logo/Gitea/Gitea-Logo.wine.png` (Update existing GitHub link to Gitea icon)
  - **Kasm Workspaces:** `https://avatars.githubusercontent.com/u/44181855?s=280&v=4`
  - **Cisco Duo:** `https://upload.wikimedia.org/wikipedia/commons/8/8b/Duo_Logo_Green.svg`
  - **Cloudflare:** `https://raw.githubusercontent.com/lobehub/lobeicons/refs/heads/master/packages/static-png/dark/cloudflare-color.png`
  - **SafeLine:** `https://safepoint.cloud/_next/static/media/logo.11697169.svg`
  - **GLPI:** `https://avatars.githubusercontent.com/u/13361707?s=280&v=4`
  - **Wireshark:** `https://www.wireshark.org/_astro/wireshark-logobig.CkRjSOaC_2eT4Ah.png`
- **And** each new technology MUST include its corresponding name.

