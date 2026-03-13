## Context
The project is transitioning from a general frontend portfolio to a specialized Cybersecurity & Infrastructure portfolio for Léonard-Anton. This requires a specific aesthetic: a "Unix Terminal" feel within a modern "Cyber-Glass" UI.

## Goals / Non-Goals
- **Goals:**
  - Transition to Léonard-Anton / Nekocorp identity.
  - Implement the terminal-inspired aesthetic for text and sections.
  - Optimize metadata for cybersecurity/infrastructure niche.
- **Non-Goals:**
  - Complete rewrite of the OGL/WebGL background logic.
  - Major layout structural changes beyond content and branding.

## Decisions
- **Decision:** Use numeric log-style headers for sections (e.g., `[01] _WHOAMI`).
  - **Rationale:** Aligns with the professional student persona and terminal immersion.
- **Decision:** Use command-style button text (e.g., `wget ./resume_fr.pdf`).
  - **Rationale:** Enhances the system terminal theme requested by the client.
- **Decision:** Implement dynamic tab titles using a `visibilitychange` event listener.
  - **Rationale:** Boosts the "system terminal" vibe by switching to `[DISCONNECTED]` when inactive.
- **Decision:** Replace the hardcoded Formspree endpoint with a new one or transition to Firebase.
  - **Rationale:** Critical for ensuring new inquiries are routed to the new owner.
- **Decision:** Maintain "VCR OSD MONO" font for all "system" text elements.
  - **Rationale:** Consistent with the existing visual style while reinforcing the terminal vibe.

## Risks / Trade-offs
- **Risk:** Terminal-style jargon (wget, cat) might confuse non-technical recruiters.
  - **Mitigation:** Ensure tooltips or clear context are provided, though the primary target is technical infrastructure teams.

## Migration Plan
- **Phase 1:** Core metadata and layout rebranding.
- **Phase 2:** Update primary component content (Hero, About).
- **Phase 3:** Update section titles and interactive buttons.
- **Phase 4:** Replace image assets with Nekocorp-themed placeholders/final assets.

## Open Questions
- Are there specific high-resolution Nekocorp logos available for the `logo-leochan.png` replacement? (Assumed: Client-provided assets).
