# skills Specification

## Purpose
TBD - created by archiving change update-skills-content. Update Purpose after archive.
## Requirements
### Requirement: Update Skills Categories and Items (French)
The "Ce que je fais ?" section SHALL correctly reflect the new technical categories and their detailed items in French.

#### Scenario: Display New Cybersecurity & Network Defense Category
- **Given** the new skills list with "Cybersécurité & Défense Réseau".
- **When** the user views the skills section.
- **Then** the category "Cybersécurité & Défense Réseau" MUST be visible.
- **And** it SHOULD display items like "Architecture Zero-Trust" and "Sécurité Réseau (WAF, VLAN)".

#### Scenario: Display New Infrastructure & DevOps Category
- **Given** the new skills list with "Infrastructure & DevOps (Le Stack Nekocorp)".
- **When** the user views the skills section.
- **Then** the category "Infrastructure & DevOps (Le Stack Nekocorp)" MUST be visible.
- **And** it SHOULD display items like "Conteneurisation (Docker & Compose)" and "Automatisation (Ansible, n8n)".

#### Scenario: Display New Software Development Category
- **Given** the new skills list with "Développement Logiciel".
- **When** the user views the skills section.
- **Then** the category "Développement Logiciel" MUST be visible.
- **And** it SHOULD display items like "Backend (Python, Django, PHP)" and "Frontend (HTML5, CSS3, Tailwind)".

#### Scenario: Display New IT Service Management (ITSM) Category
- **Given** the new skills list with "Gestion des Services IT (ITSM)".
- **When** the user views the skills section.
- **Then** the category "Gestion des Services IT (ITSM)" MUST be visible.
- **And** it SHOULD display items like "Framework ITIL" and "Automatisation des flux de travail (ServiceNow, GLPI)".

#### Scenario: Display New Hardware & Edge Computing Category
- **Given** the new skills list with "Matériel & Edge Computing".
- **When** the user views the skills section.
- **Then** the category "Matériel & Edge Computing" MUST be visible.
- **And** it SHOULD display items like "Architecture Bare Metal (Raspberry Pi 5)" and "Optimisation Matérielle (GPU encoding)".

#### Scenario: Display New Professional Profile Category
- **Given** the new skills list with "Profil Professionnel & Soft Skills".
- **When** the user views the skills section.
- **Then** the category "Profil Professionnel & Soft Skills" MUST be visible.
- **And** it SHOULD display items like "Stratégie & Ventes Techniques" and "Réponse aux Incidents".

### Requirement: Expand Technology Marquee
The infinite scrolling logo marquee SHALL be expanded to include new technologies from the technical stack.

#### Scenario: Add Docker to Logo Marquee
- **Given** the `logoWall.astro` component.
- **When** the "docker" technology is added to the technologies array.
- **Then** the Docker logo and name MUST appear in the infinite scrolling list.

#### Scenario: Add Ansible to Logo Marquee
- **Given** the `logoWall.astro` component.
- **When** the "ansible" technology is added to the technologies array.
- **Then** the Ansible logo and name MUST appear in the infinite scrolling list.

#### Scenario: Continuous Loop Persistence
- **When** new technologies are added.
- **Then** the marquee MUST maintain its seamless infinite loop behavior without visual gaps.

