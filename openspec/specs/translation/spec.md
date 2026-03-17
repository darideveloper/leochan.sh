# translation Specification

## Purpose
TBD - created by archiving change translate-to-french. Update Purpose after archive.
## Requirements
### Requirement: Website Localization
The site SHALL be primarily in English, reflecting the owner's professional focus on an international audience.

#### Scenario: Professional Branding Translation
- **Given** the owner's preference for English.
- **When** the home page is rendered.
- **Then** the primary greeting MUST be "Hi, I’m Leonard-Anton".
- **And** the job title MUST be "Cybersecurity & Infrastructure Engineer with a focus on Zero-Trust architectures and automation."
- **And** the hero tagline MUST be "root@portfolio: # ./display_infrastructure.sh".

#### Scenario: Mapping Detailed Skill Descriptions
- **Given** the owner's detailed skill categories.
- **When** the `SkillsList` component is rendered.
- **Then** the following category and detail mappings MUST be used:
  - **"Ce que je fais"** -> **"My skills"**
  - **"Architecture Sécurité & Zero-Trust"** -> **"Security Architecture & Zero-Trust"**
    - "Gestion des Identités (IAM)..." -> "Identity Management (IAM): Authentik, Cisco Duo (MFA), and custom Role-Based Access Control (RBAC) systems."
    - "Défense de Périmètre..." -> "Perimeter Defense: SafeLine WAF, Forward Auth Reverse Proxy, and advanced ingress traffic filtering."
    - "Souveraineté Réseau..." -> "Network Sovereignty: “Router on a stick” topologies, VLAN segmentation, and strict firewall policies."
    - "Monitoring (SIEM)..." -> "Monitoring (SIEM): Deployment of Wazuh for centralized threat detection and security auditing."
  - **"DevOps & Infrastructure as Code (IaC)"** -> **"DevOps & Infrastructure as Code (IaC)"**
    - "Automation & Orchestration..." -> "Automation & Orchestration: Advanced proficiency in Ansible Automation Platform (AAP), n8n, and complex Python workflows."
    - "Conteneurisation..." -> "Containerization: Expertise in Docker & Docker Compose for microservices and environment parity."
    - "CI/CD & DevEx..." -> "CI/CD & DevEx: Ephemeral development environments via Kasm Workspaces and self-hosted Git forges."
    - "Intégration API..." -> "API Integration: Experience with Microsoft Graph API, ServiceNow, GLPI and LDAP synchronization (Hybrid Cloud)."
  - **"Systèmes & Ingénierie Bas Niveau"** -> **"Systems & Low-Level Engineering"**
    - "Programmation Réseau..." -> "Network Programming: Custom application protocol engineering (Python Sockets), TCP framing, and multithreading."
    - "Protocoles IoT..." -> "IoT Protocols: Implementation of MQTT (QoS 0/1/2) and real-time communication (WebRTC, LiveKit, Janus)."
    - "Administration Linux..." -> "Linux Administration: Hardened Linux system management, kernel-level understanding, and advanced Shell/Bash scripting."
  - **"Développement Logiciel (Full-Stack)"** -> **"Software Development (Full-Stack)"**
    - "Maîtrise Backend..." -> "Backend expertise: Python (Django), PHP (native LAMP)."
    - "Bases de Données..." -> "Databases: PostgreSQL, MySQL, and Redis; with a focus on security (PDO) and data integrity."
    - "Interface & UI..." -> "Interface & UI: Tailwind CSS for modern web interfaces and Tkinter for desktop GUI clients."
  - **"ITSM & Résilience Entreprise"** -> **"ITSM & Business Resilience"** (Maintain ITIL, DR, and Service Management bullet points in English as per requirements).

### Requirement: Hero Quote
A professional quote MUST be added beneath the job title to capture the owner's philosophy.

#### Scenario: Displaying Professional Quote
- **Given** the updated hero layout.
- **When** the intro section is visible.
- **Then** the quote MUST read: "From IT to aviation, I thrive on complex systems, committed to the dual pillars of technical performance and security."
- **And** it SHOULD be styled with distinctive quotes and a smaller font than the job title.

### Requirement: Personal Information Updates
The owner's professional links and contact details MUST be current.

#### Scenario: Updating Social Links and Email
- **Given** the owner's updated profiles.
- **When** the contact links are rendered.
- **Then** the GitHub icon/link MUST be replaced with Gitea pointing to `https://git.nekocorp.fr/leo`.
- **And** the LinkedIn link MUST point to `https://www.linkedin.com/in/leonard-anton-llosa/`.
- **And** the public-facing email MUST be `leonard+leochan.sh@nekocorp.fr`.

