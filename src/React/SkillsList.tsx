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
  "Security Architecture & Zero-Trust": <MdSecurity className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "DevOps & Infrastructure as Code (IaC)": <MdDns className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Systems & Low-Level Engineering": <MdMemory className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "Software Development (Full-Stack)": <MdCode className="w-6 h-6 text-[var(--sec)] opacity-70" />,
  "ITSM & Business Resilience": <MdAutorenew className="w-6 h-6 text-[var(--sec)] opacity-70" />,
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Security Architecture & Zero-Trust": [
      "Identity Management (IAM): Authentik, Cisco Duo (MFA), and custom Role-Based Access Control (RBAC) systems.",
      "Perimeter Defense: SafeLine WAF, Forward Auth Reverse Proxy, and advanced ingress traffic filtering.",
      "Network Sovereignty: “Router on a stick” topologies, VLAN segmentation, and strict firewall policies.",
      "Monitoring (SIEM): Deployment of Wazuh for centralized threat detection and security auditing.",
    ],
    "DevOps & Infrastructure as Code (IaC)": [
      "Automation & Orchestration: Advanced proficiency in Ansible Automation Platform (AAP), n8n, and complex Python workflows.",
      "Containerization: Expertise in Docker & Docker Compose for microservices and environment parity.",
      "CI/CD & DevEx: Ephemeral development environments via Kasm Workspaces and self-hosted Git forges.",
      "API Integration: Experience with Microsoft Graph API, ServiceNow, GLPI and LDAP synchronization (Hybrid Cloud).",
    ],
    "Systems & Low-Level Engineering": [
      "Network Programming: Custom application protocol engineering (Python Sockets), TCP framing, and multithreading.",
      "IoT Protocols: Implementation of MQTT (QoS 0/1/2) and real-time communication (WebRTC, LiveKit, Janus).",
      "Linux Administration: Hardened Linux system management, kernel-level understanding, and advanced Shell/Bash scripting.",
    ],
    "Software Development (Full-Stack)": [
      "Backend expertise: Python (Django), PHP (native LAMP).",
      "Databases: PostgreSQL, MySQL, and Redis; with a focus on security (PDO) and data integrity.",
      "Interface & UI: Tailwind CSS for modern web interfaces and Tkinter for desktop GUI clients.",
    ],
    "ITSM & Business Resilience": [
      "ITIL Framework: Alignment of automated workflows with ITIL incident management standards.",
      "Disaster Recovery (DR): Automated S3 backups (Restic & Backblaze B2) with defined RPO/RTO objectives.",
      "Service Management: Integration of GLPI, ServiceNow and RustDesk Enterprise for global support infrastructures.",
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
        <TypingText text="My skills" />
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
