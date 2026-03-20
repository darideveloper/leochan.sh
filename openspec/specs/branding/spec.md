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
The branding MUST reflect the owner's actual skillset and toolset using locally-hosted assets where available for performance and visual consistency.

#### Scenario: Optimized Tech Wall Assets
- **Given** the `LogoWall` component.
- **When** icons for Gitea, Cisco Duo, Cloudflare, SafeLine, GLPI, and Wireshark are rendered.
- **Then** they MUST use local optimized assets (e.g., `.webp` or `.svg` in `/images/logos/`).
- **And** all icons MUST use a performant CSS strategy for their "faded" look (e.g., `grayscale(1) invert(1)` or CSS `opacity`) instead of the expensive `brightness-0 invert` filter.
- **And** the hover state MUST transition smoothly to its original or full-opacity state.

