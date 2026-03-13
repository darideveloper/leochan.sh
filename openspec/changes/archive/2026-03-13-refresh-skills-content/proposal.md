# Proposal: Refresh Skills Content

Update the portfolio's skills list with a more professional, "T-shaped" structure that highlights deep systems engineering, security, and enterprise orchestration expertise.

## Motivation
The current skills are somewhat generic. The user's profile shows a unique blend of low-level systems engineering (TCP framing, socket programming) and modern enterprise security (Zero-Trust, IAM, SIEM). This update ensures the portfolio reflects these specific, high-value capabilities and tools.

## Proposed Changes

### 1. `src/React/SkillsList.tsx`
- Replace existing 6 categories with 5 new, highly professional categories:
    1. **Architecture Sécurité & Zero-Trust** (IAM, Perimeter Defense, SIEM)
    2. **DevOps & Infrastructure as Code (IaC)** (Ansible AAP, n8n, Microsoft Graph API)
    3. **Systèmes & Ingénierie Bas Niveau** (TCP Framing, Sockets, MQTT, WebRTC)
    4. **Développement Logiciel (Full-Stack)** (Django, PHP PDO, C#/.NET, PostgreSQL, Redis)
    5. **ITSM & Résilience Entreprise** (ITIL, Disaster Recovery RPO/RTO, ServiceNow, RustDesk)
- Update content for each category with the provided detailed sub-points.
- **Language:** Maintain the site's French consistency (`lang="fr"`) while keeping technical terms in their industry-standard form.

### 2. `src/React/LogoWall.tsx`
- Expand the technology marquee with the specific tools mentioned:
    - **Security/IAM:** Authentik, Cisco, Wazuh.
    - **DevOps:** Ansible, n8n, Docker.
    - **Development:** Django, Redis, C#, .NET.
    - **Infrastructure/DR:** Kasm, Restic, Backblaze, ServiceNow, RustDesk.
- Ensure the marquee remains seamless and visually balanced.

## Verification Plan
- **Manual Verification:** Check the `LogoWall` for the new icons and verify they are correctly colored and sized.
- **Visual Check:** Expand each section in `SkillsList` to ensure the layout handles the new longer descriptions gracefully.
- **Accessibility:** Ensure `aria-expanded` and `aria-controls` still work correctly with the new structure.
