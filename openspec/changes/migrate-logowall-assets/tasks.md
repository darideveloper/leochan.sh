# Tasks: Migrate LogoWall Assets to Local WebP

## Prerequisites
- [x] Verify new logos exist in `public/images/logos/`.

## Tasks

### 1. Update LogoWall Component
Modify the `technologies` array in `src/React/LogoWall.tsx` to use local asset paths and add new entries.

- [x] **Task 1.1**: Replace the Kasm Workspaces external URL with `/images/logos/kasm.webp`.
- [x] **Task 1.2**: Add new entries for Debian, Red Hat, Tailscale, UniFi, and Wazuh using their respective local paths in `public/images/logos/`.
- [x] **Task 1.3**: Audit existing external URLs to ensure they follow consistent naming and path conventions.

### 2. Update Specification
Align `openspec/specs/branding/spec.md` with the new asset management strategy.

- [x] **Task 2.1**: Update the `Tech Stack & Skillset` requirement to reflect the transition from external to local assets for Kasm and other logos.
- [x] **Task 2.2**: Add the new technologies (Debian, Red Hat, etc.) as part of the mandatory skillset for the `LogoWall`.

### 3. Validation
- [x] **Task 3.1**: Verify that all logos render correctly with the white filter applied.
- [x] **Task 3.2**: Confirm that hovering over any logo increases its opacity to 100%.
- [x] **Task 3.3**: Ensure the infinite scrolling animation is unaffected by the additional items.
