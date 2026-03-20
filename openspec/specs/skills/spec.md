# skills Specification

## Purpose
This specification defines the professional skills architecture, including the T-shaped skill categorization and the dynamic logo marquee for tool recognition.
## Requirements
### Requirement: Professional Skill Categories
The `SkillsList` component MUST display 5 professional categories reflecting the user's "T-shaped" skill set.

#### Scenario: Displaying New Categories
- **Given** the `SkillsList` component.
- **When** the user views the skills section.
- **Then** the categories "Architecture Sécurité & Zero-Trust", "DevOps & Infrastructure as Code (IaC)", "Systèmes & Ingénierie Bas Niveau", "Développement Logiciel (Full-Stack)", and "ITSM & Résilience Entreprise" MUST be visible.

### Requirement: Expanded Skill Details
Each skill category SHALL expand to show specific, low-level technical capabilities and tools.

#### Scenario: Expanding Category Detail
- **Given** a user is viewing a collapsed category (e.g., "Systèmes & Ingénierie Bas Niveau").
- **When** the user clicks the category or presses Enter.
- **Then** details such as "TCP framing", "MQTT", and "Linux Hardening" SHOULD be displayed.

### Requirement: Professional Tool Marquee
The `LogoWall` component MUST include specific tool icons for all core technologies mentioned in the skill set.

#### Scenario: Icon Presence
- **Given** the `LogoWall` component.
- **When** the marquee is scrolling.
- **Then** icons for Authentik, Cisco Duo, Wazuh, Debian, Red Hat, Tailscale, UniFi, Backblaze, Kasm, Django, Redis, ServiceNow, RustDesk, and MQTT MUST be present.

