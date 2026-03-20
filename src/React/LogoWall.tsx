import React, { memo } from "react";
import { 
  SiVuedotjs, SiReact, SiTailwindcss, 
  SiNodedotjs, SiJavascript, 
  SiGit, SiDocker, 
  SiAnsible, SiN8N, SiPython, SiPhp, 
  SiAuthentik, SiBackblaze, SiDjango, SiRedis, 
  SiNow, SiRustdesk, SiEclipsemosquitto, SiCloudflare, SiWireshark 
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

interface Technology {
  name: string;
  icon: string | React.ReactNode;
}

const technologies: Technology[] = [
  { name: "vue", icon: <SiVuedotjs /> },
  { name: "react", icon: <SiReact /> },
  { name: "tailwindcss", icon: <SiTailwindcss /> },
  { name: "nodejs", icon: <SiNodedotjs /> },
  { name: "javaScript", icon: <SiJavascript /> },
  { name: "python", icon: <SiPython /> },
  { name: "php", icon: <SiPhp /> },
  { name: "django", icon: <SiDjango /> },
  { name: "git", icon: <SiGit /> },
  { name: "Gitea", icon: "/images/logos/gitea.webp" },
  { name: "docker", icon: <SiDocker /> },
  { name: "ansible", icon: <SiAnsible /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: "authentik", icon: <SiAuthentik /> },
  { name: "Cisco Duo", icon: "/images/logos/cisco-duo.svg" },
  { name: "Kasm Workspaces", icon: "/images/logos/kasm.webp" },
  { name: "Cloudflare", icon: "/images/logos/cloudflare.webp" },
  { name: "SafeLine", icon: "/images/logos/safeline.svg" },
  { name: "GLPI", icon: "/images/logos/glpi.webp" },
  { name: "Wireshark", icon: "/images/logos/wireshark.webp" },
  { name: "Debian", icon: "/images/logos/debian.webp" },
  { name: "Red Hat", icon: "/images/logos/redhat.webp" },
  { name: "Tailscale", icon: "/images/logos/tailscale.webp" },
  { name: "UniFi", icon: "/images/logos/unifi.webp" },
  { name: "Wazuh", icon: "/images/logos/wazuh.webp" },
  { name: "azure", icon: <VscAzure /> },
  { name: "microsoft", icon: <FaMicrosoft /> },
  { name: "serviceNow", icon: <SiNow /> },
  { name: "backblaze", icon: <SiBackblaze /> },
  { name: "redis", icon: <SiRedis /> },
  { name: "MQTT", icon: <SiEclipsemosquitto /> },
  { name: "rustDesk", icon: <SiRustdesk /> },
];

const LogoItem = memo(({ tech, isClone }: { tech: Technology; isClone: boolean }) => {
  return (
    <div 
      className="flex items-center gap-3 pr-12 md:pr-20 group transition-all duration-300"
      aria-hidden={isClone ? "true" : "false"}
    >
      <div className="flex items-center justify-center w-8 h-8 text-3xl transition-transform group-hover:scale-110 opacity-60 group-hover:opacity-100 text-[var(--white-icon)]">
        {typeof tech.icon === "string" ? (
          <img 
            src={tech.icon} 
            alt={tech.name} 
            width="32"
            height="32"
            loading="lazy"
            className="w-8 h-8 object-contain grayscale invert transition-all duration-300" 
          />
        ) : (
          tech.icon
        )}
      </div>
      <span className="text-lg font-medium text-[var(--white-icon)] whitespace-nowrap font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {tech.name.charAt(0).toUpperCase() + tech.name.slice(1)}
      </span>
    </div>
  );
});

LogoItem.displayName = "LogoItem";

const LogoWall = () => {
  return (
    <div className="relative overflow-x-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

      <div className="flex animate-scroll w-max will-change-transform">
        {technologies.map((tech) => (
          <LogoItem key={tech.name} tech={tech} isClone={false} />
        ))}
        {technologies.map((tech) => (
          <LogoItem key={`${tech.name}-clone`} tech={tech} isClone={true} />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-scroll {
          animation: scroll 70s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation-duration: 60s;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoWall;
