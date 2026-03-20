# Design: Migrate LogoWall Assets to Local WebP

## Overview
The `LogoWall` component is a React-based "island" that showcases the owner's tech stack. Currently, some logos are loaded from external URLs (GitHub, Wikimedia, etc.), which causes slower initial loads and potential visual inconsistencies if external services change or go offline.

## Architecture
- **Asset Storage**: New `.webp` logos are stored in `public/images/logos/`.
- **Data Model**: The `technologies` array in `src/React/LogoWall.tsx` maps each technology to its name and icon (React component or image URL string).
- **Styling**: `LogoWall` uses Tailwind classes (`brightness-0 invert opacity-60 group-hover:opacity-100`) to force icons to a uniform "dimmed white" style that brightens on hover.

### Mapping for Migration
| Technology | Original Icon (External) | New Icon (Local Asset) |
| :--- | :--- | :--- |
| **Kasm Workspaces** | `https://avatars.githubusercontent.com/u/44181855?s=280&v=4` | `/images/logos/kasm.webp` |
| **Debian** | (N/A) | `/images/logos/debian.webp` |
| **Red Hat** | (N/A) | `/images/logos/redhat.webp` |
| **Tailscale** | (N/A) | `/images/logos/tailscale.webp` |
| **UniFi** | (N/A) | `/images/logos/unifi.webp` |
| **Wazuh** | (N/A) | `/images/logos/wazuh.webp` |

## Technical Logic
The component's existing logic for rendering images is robust:

```tsx
{typeof tech.icon === "string" ? (
  <img src={tech.icon} alt={tech.name} className="size-8 object-contain brightness-0 invert opacity-60 group-hover:opacity-100" />
) : (
  tech.icon
)}
```

By providing a local path string (e.g., `"/images/logos/debian.webp"`), the component will correctly render an `<img>` tag and apply the required white filters.

## Trade-offs
- **Bundle Size**: Adding more images to `public/` slightly increases the total distribution size, but `.webp` files are very small (averaging 2-4 KB each).
- **Maintenance**: Adding logos manually to the array is simple for small lists. For larger walls, a dynamic data source (like a JSON file) could be considered later.
