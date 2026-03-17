import React, { useState } from "react";
import TypingText from "./TypingText";
import { 
  MdSecurity, 
  MdDns, 
  MdCode, 
  MdSettingsSuggest, 
  MdMemory, 
  MdPersonSearch,
  MdExpandMore,
  MdAutorenew
} from "react-icons/md";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Architecture Sécurité & Zero-Trust": <MdSecurity className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "DevOps & Infrastructure as Code (IaC)": <MdDns className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Systèmes & Ingénierie Bas Niveau": <MdMemory className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Développement Logiciel (Full-Stack)": <MdCode className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "ITSM & Résilience Entreprise": <MdAutorenew className="w-6 h-6 text-[var(--sec)] opacity-70" />,
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Architecture Sécurité & Zero-Trust": [
      "Gestion des Identités (IAM) : Authentik, Cisco Duo (MFA), et systèmes RBAC (Role-Based Access Control) personnalisés.",
      "Défense de Périmètre : SafeLine WAF, Forward Auth Reverse Proxy et filtrage avancé du trafic entrant (Ingress).",
      "Souveraineté Réseau : Topologies \"Router on a stick\", segmentation VLAN, et politiques de pare-feu (Firewall) strictes.",
      "Monitoring (SIEM) : Déploiement de Wazuh pour la détection centralisée des menaces et l'audit de sécurité.",
    ],
    "DevOps & Infrastructure as Code (IaC)": [
      "Automation & Orchestration : Maîtrise avancée d'Ansible Automation Platform (AAP), n8n, et workflows Python complexes.",
      "Conteneurisation : Expertise Docker & Docker Compose pour les microservices et la parité d'environnement.",
      "CI/CD & DevEx : Environnements de développement éphémères via Kasm Workspaces et forges Git auto-hébergées.",
      "Intégration API : Expérience avec Microsoft Graph API, ServiceNow, et synchronisation LDAP (Hybrid Cloud).",
    ],
    "Systèmes & Ingénierie Bas Niveau": [
      "Programmation Réseau : Ingénierie de protocoles applicatifs sur-mesure (Python Sockets), TCP framing et multi-threading.",
      "Protocoles IoT : Implémentation de MQTT (QoS 0/1/2) et communication temps-réel (WebRTC, LiveKit, Janus).",
      "Administration Linux : Gestion système durcie (Hardened Linux), compréhension niveau Kernel et scripts Shell/Bash avancés.",
    ],
    "Développement Logiciel (Full-Stack)": [
      "Maîtrise Backend : Python (Django), PHP (Native LAMP), et C#/.NET pour les contextes d'entreprise.",
      "Bases de Données : PostgreSQL, MySQL, et Redis ; focus sur la sécurité (PDO) et l'intégrité des données.",
      "Interface & UI : Tailwind CSS pour les interfaces web modernes et Tkinter pour les clients desktop GUI.",
    ],
    "ITSM & Résilience Entreprise": [
      "Framework ITIL : Alignement des workflows automatisés sur les standards de gestion d'incidents ITIL.",
      "Plan de Reprise d'Activité (DR) : Sauvegardes automatisées S3 (Restic & Backblaze B2) avec objectifs RPO/RTO définis.",
      "Gestion des Services : Intégration de GLPI, ServiceNow et RustDesk Enterprise pour les infrastructures de support globales.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleItem(item);
    }
  };

  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6 min-h-[1.2em]">
        <TypingText text="Ce que je fais ?" />
      </h3>
      <ul className="flex flex-col items-center lg:items-start space-y-4 mt-4 text-lg w-full">
        {Object.entries(skills).map(([category, items], index) => {
          const isExpanded = openItem === category;
          const sectionId = `skill-section-${index}`;
          const triggerId = `skill-trigger-${index}`;

          return (
            <li key={category} className="w-full flex justify-center lg:justify-start">
              <div
                id={triggerId}
                onClick={() => toggleItem(category)}
                onKeyDown={(e) => handleKeyDown(e, category)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={sectionId}
                className="md:w-[450px] w-full cyber-glass rounded-2xl text-left transition-all border border-white/10 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--sec)] focus:ring-opacity-50"
              >
                <div className="flex items-center gap-3 p-4">
                  {CategoryIcons[category]}
                  <div className="flex items-center gap-2 flex-grow justify-between">
                    <div className="min-w-0 max-w-[250px] md:max-w-none overflow-hidden">
                      <span className="block truncate text-[var(--white)] text-lg">
                        {category}
                      </span>
                    </div>
                    <MdExpandMore
                      className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  id={sectionId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`transition-all duration-300 px-4 ${
                    isExpanded
                      ? "max-h-[800px] pb-4 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <ul className="space-y-2 text-[var(--white-icon)] text-sm border-t border-[var(--white-icon-tr)] pt-3">
                    {items.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <span className="pl-1 text-[var(--sec)]" aria-hidden="true">•</span>
                        <li className="pl-3">{item}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillsList;
