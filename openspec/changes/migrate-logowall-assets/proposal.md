# Proposal: Migrate LogoWall Assets to Local WebP

## Motivation
Updating the `LogoWall` component to use locally-hosted `.webp` assets instead of external URLs for improved performance, offline support, and better control over visual consistency. This change also introduces new technology logos (Debian, Red Hat, Tailscale, UniFi, and Wazuh) to reflect the owner's expanding skillset in Cybersecurity & Infrastructure.

## Goals
- Replace the external Kasm Workspaces logo URL with the local `/images/logos/kasm.webp`.
- Add new technology logos: Debian, Red Hat, Tailscale, UniFi, and Wazuh using local assets.
- Ensure all logos match the existing "dimmed white" aesthetic through CSS filters.
- Maintain the infinite horizontal scrolling animation in the `LogoWall` component.

## Scope
- `src/React/LogoWall.tsx`: Update the `technologies` array and logic.
- `openspec/specs/branding/spec.md`: Update requirements to reflect local asset usage.
- `public/images/logos/`: No changes required as the assets are already present.

## Alternatives
- Continue using external URLs: This is fragile and relies on third-party availability.
- Use SVG icons: While SVGs are great, the current workflow in `LogoWall` is optimized for both components and images, and `.webp` provides high compression for complex logos.
