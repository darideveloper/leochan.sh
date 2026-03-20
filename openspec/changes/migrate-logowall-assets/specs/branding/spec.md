# branding Specification (Delta)

## MODIFIED Requirements
### Requirement: Tech Stack & Skillset
The branding MUST reflect the owner's actual skillset and toolset using locally-hosted assets where available for performance and visual consistency.

#### Scenario: Updating Tech Wall
- **Given** the owner's current expertise.
- **When** the `LogoWall` is rendered.
- **Then** the following technologies MUST be REMOVED: .NET, Astro, TypeScript, Next.js.
- **And** the following technologies MUST be ADDED with their respective icons:
  - **Gitea:** `https://download.logo.wine/logo/Gitea/Gitea-Logo.wine.png` (Update existing GitHub link to Gitea icon)
  - **Kasm Workspaces:** `/images/logos/kasm.webp` (Local asset replacement)
  - **Cisco Duo:** `https://upload.wikimedia.org/wikipedia/commons/8/8b/Duo_Logo_Green.svg`
  - **Cloudflare:** `https://raw.githubusercontent.com/lobehub/lobeicons/refs/heads/master/packages/static-png/dark/cloudflare-color.png`
  - **SafeLine:** `https://safepoint.cloud/_next/static/media/logo.11697169.svg`
  - **GLPI:** `https://avatars.githubusercontent.com/u/13361707?s=280&v=4`
  - **Wireshark:** `https://www.wireshark.org/_astro/wireshark-logobig.CkRjSOaC_2eT4Ah.png`
  - **Debian**: `/images/logos/debian.webp`
  - **Red Hat**: `/images/logos/redhat.webp`
  - **Tailscale**: `/images/logos/tailscale.webp`
  - **UniFi**: `/images/logos/unifi.webp`
  - **Wazuh**: `/images/logos/wazuh.webp`
- **And** each new technology MUST include its corresponding name.
- **And** all icons MUST apply the standard `brightness-0 invert opacity-60` CSS filter for visual consistency.
