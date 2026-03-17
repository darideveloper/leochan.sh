import React from "react";
import { 
  SiAstro, SiVuedotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiNextdotjs, SiNodedotjs, SiHtml5, SiCss, SiJavascript, 
  SiGit, SiSupabase, SiMysql, SiGnubash, SiDocker, 
  SiAnsible, SiN8N, SiGitlab, SiPython, SiPhp, 
  SiPostgresql, SiAuthentik, SiCisco, SiBackblaze, SiDjango, SiRedis, 
  SiDotnet, SiNow, SiRustdesk, SiEclipsemosquitto 
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

const technologies = [
  { name: "astro", icon: <SiAstro /> },
  { name: "vue", icon: <SiVuedotjs /> },
  { name: "react", icon: <SiReact /> },
  { name: "typeScript", icon: <SiTypescript /> },
  { name: "tailwindcss", icon: <SiTailwindcss /> },
  { name: "next", icon: <SiNextdotjs /> },
  { name: "nodejs", icon: <SiNodedotjs /> },
  { name: "javaScript", icon: <SiJavascript /> },
  { name: "python", icon: <SiPython /> },
  { name: "php", icon: <SiPhp /> },
  { name: "django", icon: <SiDjango /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: ".NET", icon: <SiDotnet /> },
  { name: "git", icon: <SiGit /> },
  { name: "docker", icon: <SiDocker /> },
  { name: "ansible", icon: <SiAnsible /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: "authentik", icon: <SiAuthentik /> },
  { name: "cisco", icon: <SiCisco /> },
  { name: "azure", icon: <VscAzure /> },
  { name: "microsoft", icon: <FaMicrosoft /> },
  { name: "serviceNow", icon: <SiNow /> },
  { name: "backblaze", icon: <SiBackblaze /> },
  { name: "redis", icon: <SiRedis /> },
  { name: "MQTT", icon: <SiEclipsemosquitto /> },
  { name: "rustDesk", icon: <SiRustdesk /> },
];

const LogoWall = () => {
  return (
    <div className="relative overflow-x-hidden py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20"></div>

      <div className="flex animate-scroll w-max will-change-transform">
        {[...technologies, ...technologies].map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`}
            className="flex items-center gap-3 pr-12 md:pr-20 group transition-all duration-300"
            aria-hidden={index >= technologies.length ? "true" : "false"}
          >
            <div className="text-3xl transition-transform group-hover:scale-110 opacity-60 text-[var(--white-icon)]">
              {tech.icon}
            </div>
            <span className="text-lg font-medium text-[var(--white-icon)] whitespace-nowrap font-mono">
              {tech.name.charAt(0).toUpperCase() + tech.name.slice(1)}
            </span>
          </div>
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
