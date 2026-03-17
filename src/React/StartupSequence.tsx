import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";

const BOOT_LOGS = [
  { text: "Initializing NEKOCORP_OS Kernel v5.0.1...", type: "info" },
  { text: "Loading Zero-Trust Authentication Modules...", type: "status", status: "OK" },
  { text: "Mounting Virtual File Systems (/mnt/projects)...", type: "status", status: "OK" },
  { text: "Starting Network Security Manager (WAF/LB)...", type: "status", status: "OK" },
  { text: "Applying Infrastructure Automation (Ansible/Python)...", type: "status", status: "OK" },
  { text: "Verifying Identity via secure_tunnel...", type: "status", status: "VERIFIED", color: "text-[var(--tertiary)]" },
  { text: "System status: NO SPIES ALLOWED.", type: "highlight" },
  { text: "Handing over control to Leonard-Anton...", type: "info" },
];

const StartupSequence: React.FC = () => {
  const [phase, setPhase] = useState<"checking" | "booting" | "welcome" | "revealing" | "complete">("checking");
  const [visibleLogs, setVisibleLogs] = useState<number>(0);
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check session storage
    const hasBooted = sessionStorage.getItem("hasBooted");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasBooted || prefersReducedMotion) {
      setPhase("complete");
      document.body.style.overflow = "auto";
      return;
    }

    setShouldRender(true);
    setPhase("booting");
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (phase !== "booting") return;

    if (visibleLogs < BOOT_LOGS.length) {
      // Slower, more rhythmic log generation
      const delay = Math.random() * 400 + 250;
      const timeout = setTimeout(() => {
        setVisibleLogs((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // Longer pause after last log before welcome screen
      const timeout = setTimeout(() => {
        setPhase("welcome");
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [visibleLogs, phase]);

  useEffect(() => {
    if (phase === "welcome") {
      // Increased welcome screen duration
      const timeout = setTimeout(() => {
        handleComplete();
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [phase]);

  const handleComplete = () => {
    setPhase("revealing");
    sessionStorage.setItem("hasBooted", "true");
    
    // Start fading in the website immediately to crossfade with the overlay
    document.documentElement.classList.remove("is-booting");
    // Dispatch event so other components (like TypingText) know they can start
    window.dispatchEvent(new Event("nekocorp:bootComplete"));
    
    setTimeout(() => {
      setPhase("complete");
      document.body.style.overflow = "auto";
    }, 1200);
  };

  const skipSequence = () => {
    handleComplete();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "Escape") {
        skipSequence();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (phase === "complete" || !shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className={clsx(
        "fixed inset-0 z-[100] flex flex-col bg-[var(--background)] transition-all duration-1000 ease-in-out font-vcr",
        phase === "revealing" ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      {/* Visual Effects Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(6,2,12,0)_30%,rgba(4,1,8,1)_100%)]"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col p-6 md:p-12 overflow-hidden">
        {phase === "booting" && (
          <div className="flex-1 flex flex-col justify-end space-y-2 mb-12">
            {BOOT_LOGS.slice(0, visibleLogs).map((log, i) => (
              <div key={i} className="text-sm md:text-lg animate-in fade-in slide-in-from-bottom-1 duration-500">
                <span className="text-[var(--muted)] mr-4">
                  [{((i * 0.1234) + 0.0012).toFixed(4)}]
                </span>
                <span className={clsx(log.type === "highlight" ? "text-[var(--tertiary)] font-bold" : "text-[var(--foreground)]")}>
                  {log.text}
                </span>
                {log.type === "status" && (
                  <span className={clsx("ml-4 font-bold", log.color || "text-[var(--primary)]")}>
                    [{log.status}]
                  </span>
                )}
              </div>
            ))}
            <div className="flex items-center">
              <span className="text-[var(--muted)] mr-4">
                [{((visibleLogs * 0.1234) + 0.0012).toFixed(4)}]
              </span>
              <div className="w-3 h-5 bg-[var(--primary)] animate-pulse shadow-[0_0_8px_var(--primary)]"></div>
            </div>
          </div>
        )}

        {phase === "welcome" && (
          <div className="flex-1 flex flex-col items-center justify-center animate-in zoom-in fade-in duration-1000 ease-out">
            <h1 className="text-3xl md:text-7xl font-bold tracking-[0.1em] text-white drop-shadow-[0_0_20px_var(--primary)]">
              NEKOCORP_OS
            </h1>
            <p className="mt-4 text-[var(--primary)] text-lg md:text-xl tracking-[0.2em] animate-pulse">
              SYSTEM READY
            </p>
          </div>
        )}

        {/* Skip Button */}
        <button
          onClick={skipSequence}
          className="absolute bottom-8 right-8 text-[var(--muted)] hover:text-white transition-colors text-xs md:text-sm px-4 py-2 rounded cyber-glass"
        >
          SKIP (ESC)
        </button>
      </div>
    </div>
  );
};

export default StartupSequence;
