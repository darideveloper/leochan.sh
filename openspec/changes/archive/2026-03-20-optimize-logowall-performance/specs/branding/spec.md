# Branding Update for Optimized LogoWall

## Purpose
This specification updates the branding requirements for the professional tool marquee to prioritize performance without compromising the visual identity.

## MODIFIED Requirements
### Requirement: Tech Stack & Skillset
The branding MUST reflect the owner's actual skillset and toolset using locally-hosted assets where available for performance and visual consistency.

#### Scenario: Optimized Tech Wall Assets
- **Given** the `LogoWall` component.
- **When** icons for Gitea, Cisco Duo, Cloudflare, SafeLine, GLPI, and Wireshark are rendered.
- **Then** they MUST use local optimized assets (e.g., `.webp` or `.svg` in `/images/logos/`).
- **And** all icons MUST use a performant CSS strategy for their "faded" look (e.g., `grayscale(1) invert(1)` or CSS `opacity`) instead of the expensive `brightness-0 invert` filter.
- **And** the hover state MUST transition smoothly to its original or full-opacity state.
