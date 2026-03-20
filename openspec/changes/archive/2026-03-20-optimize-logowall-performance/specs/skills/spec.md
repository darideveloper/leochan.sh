# Performance Optimization for LogoWall

## Purpose
This specification defines the performance and asset localization requirements for the professional tool marquee.

## MODIFIED Requirements
### Requirement: Professional Tool Marquee
The `LogoWall` component MUST include specific tool icons for all core technologies mentioned in the skill set.

#### Scenario: Localized Icon Usage
- **Given** the `LogoWall` component.
- **When** the marquee is scrolling.
- **Then** icons for Gitea, Cisco Duo, Cloudflare, SafeLine, GLPI, and Wireshark MUST be loaded from local project paths (e.g., `/images/logos/*.webp`).

#### Scenario: Optimized Rendering
- **Given** the `LogoWall` marquee items.
- **When** the animation is active.
- **Then** the browser MUST NOT perform expensive `brightness-0 invert` filters on every frame for image assets.
- **And** the items SHOULD be wrapped in `React.memo` to prevent unnecessary re-renders.
- **And** the layout MUST use fixed sizing for image containers to avoid layout reflows during loading.
