import React, { useState } from "react";
import TypingText from "./TypingText";
import { 
  MdSecurity, 
  MdDns, 
  MdCode, 
  MdSettingsSuggest, 
  MdMemory, 
  MdPersonSearch,
  MdExpandMore 
} from "react-icons/md";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Cybersécurité & Défense Réseau": <MdSecurity className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Infrastructure & DevOps": <MdDns className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Développement Logiciel & Systèmes": <MdCode className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Gestion des Services IT (ITSM)": <MdSettingsSuggest className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Matériel & Edge Computing": <MdMemory className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Profil Professionnel & Soft Skills": <MdPersonSearch className="w-6 h-6 text-[var(--sec)] opacity-70" />,
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Cybersécurité & Défense Réseau": [
      "Architecture Zero-Trust : Environnements segmentés 'Moindre Privilège'",
      "IAM : Authentik, Cisco Duo (MFA), Reverse Proxy Forward Auth",
      "Sécurité Réseau : SafeLine WAF, VLAN Segregation, Router on a stick",
      "Détection de menaces : Déploiement Wazuh (SIEM) et Audit logging",
      "Sécurité Web : Prévention SQLi (PDO), Protection CSRF",
    ],
    "Infrastructure & DevOps": [
      "Conteneurisation : Docker & Docker Compose (Avancé)",
      "Virtualisation : Kasm Workspaces (Environnements éphémères / Bastions)",
      "Automatisation : Ansible (AAP), n8n, GitLab CI/CD",
      "Cloud & Hybride : Azure AD, Microsoft Graph API, Sync LDAP",
      "Sauvegarde & PRA : Restic, Backblaze B2 (S3), Optimisation RTO/RPO",
    ],
    "Développement Logiciel & Systèmes": [
      "Backend : Python (Sockets, Multi-threading)",
      "Gestion de BDD : SMDB (GLPI)",
      "Prog. Système : Sockets TCP/UDP, Conception de headers de paquets",
    ],
    "Gestion des Services IT (ITSM)": [
      "Framework ITIL : Alignement sur les standards de gestion d'incidents",
      "Automatisation des flux : Ticketing auto (ServiceNow, GLPI), Self-service",
      "Gestion des terminaux : RustDesk Enterprise, Provisionnement auto",
    ],
    "Matériel & Edge Computing": [
      "Architecture Bare Metal : Raspberry Pi 5 (NVMe I/O), Noeuds Intel i9",
      "Optimisation : GPU encoding (RTX 3060), Allocation de noeuds",
    ],
    "Profil Professionnel & Soft Skills": [
      "Stratégie & Ventes Techniques : Transition Dev vers Architecte (GTM)",
      "Réponse aux Incidents : Récupération systémique critique sous pression",
      "Apprentissage Continu : Pont entre académie et entreprise",
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
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6 min-h-[1.2em]">
        <TypingText text="Ce que je fais ?" />
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items], index) => {
          const isExpanded = openItem === category;
          const sectionId = `skill-section-${index}`;
          const triggerId = `skill-trigger-${index}`;

          return (
            <li key={category} className="w-full">
              <div
                id={triggerId}
                onClick={() => toggleItem(category)}
                onKeyDown={(e) => handleKeyDown(e, category)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={sectionId}
                className="md:w-[450px] w-full bg-white/5 backdrop-blur-md rounded-2xl text-left hover:bg-white/10 transition-all border border-white/10 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--sec)] focus:ring-opacity-50"
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
                      ? "max-h-[500px] pb-4 opacity-100"
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
