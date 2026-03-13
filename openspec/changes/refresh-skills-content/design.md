# Design: Refresh Skills Content

Update the skills section to reflect a "T-shaped" professional profile.

## Data Mapping & Translation Strategy (FR)

### 1. Architecture Sécurité & Zero-Trust
- **Gestion des Identités (IAM) :** Authentik, Cisco Duo (MFA), et systèmes RBAC (Role-Based Access Control) personnalisés.
- **Défense de Périmètre :** SafeLine WAF, Forward Auth Reverse Proxy et filtrage avancé du trafic entrant (Ingress).
- **Souveraineté Réseau :** Topologies "Router on a stick", segmentation VLAN, et politiques de pare-feu (Firewall) strictes.
- **Monitoring (SIEM) :** Déploiement de Wazuh pour la détection centralisée des menaces et l'audit de sécurité.

### 2. DevOps & Infrastructure as Code (IaC)
- **Automation & Orchestration :** Maîtrise avancée d'Ansible Automation Platform (AAP), n8n, et workflows Python complexes.
- **Conteneurisation :** Expertise Docker & Docker Compose pour les microservices et la parité d'environnement.
- **CI/CD & DevEx :** Environnements de développement éphémères via Kasm Workspaces et forges Git auto-hébergées.
- **Intégration API :** Expérience avec Microsoft Graph API, ServiceNow, et synchronisation LDAP (Hybrid Cloud).

### 3. Systèmes & Ingénierie Bas Niveau
- **Programmation Réseau :** Ingénierie de protocoles applicatifs sur-mesure (Python Sockets), TCP framing et multi-threading.
- **Protocoles IoT :** Implémentation de MQTT (QoS 0/1/2) et communication temps-réel (WebRTC, LiveKit, Janus).
- **Administration Linux :** Gestion système durcie (Hardened Linux), compréhension niveau Kernel et scripts Shell/Bash avancés.

### 4. Développement Logiciel (Full-Stack)
- **Maîtrise Backend :** Python (Django), PHP (Native LAMP), et C#/.NET pour les contextes d'entreprise.
- **Bases de Données :** PostgreSQL, MySQL, et Redis ; focus sur la sécurité (PDO) et l'intégrité des données.
- **Interface & UI :** Tailwind CSS pour les interfaces web modernes et Tkinter pour les clients desktop GUI.

### 5. ITSM & Résilience Entreprise
- **Framework ITIL :** Alignement des workflows automatisés sur les standards de gestion d'incidents ITIL.
- **Plan de Reprise d'Activité (DR) :** Sauvegardes automatisées S3 (Restic & Backblaze B2) avec objectifs RPO/RTO définis.
- **Gestion des Services :** Intégration de GLPI, ServiceNow et RustDesk Enterprise pour les infrastructures de support globales.

## Component Updates

### `SkillsList.tsx`
- **Proposed Category Icons:**
    - Architecture Sécurité: `MdSecurity`
    - DevOps & IaC: `MdDns`
    - Ingénierie Bas Niveau: `MdMemory`
    - Développement Logiciel: `MdCode`
    - ITSM & Résilience: `MdAutorenew`

### `LogoWall.tsx`
- **Additional Imports:**
    - `SiAuthentik`, `SiCisco`, `SiWazuh`, `SiRestic`, `SiBackblaze`, `SiKasm`.
    - `SiDjango`, `SiRedis`, `SiCsharp`, `SiDotnet`.
    - `SiServicenow`, `SiRustdesk`, `SiEclipsemosquitto` (MQTT).
