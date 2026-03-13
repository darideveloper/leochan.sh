import React, { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  cursorChar?: string;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  cursorChar = "_",
  showCursor = true,
  className = "",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    // Wait until the document is available and check if the boot sequence is active
    if (typeof document !== "undefined") {
      const isBooting = document.documentElement.classList.contains("is-booting");
      if (!isBooting) {
        setCanStart(true);
      } else {
        const handleBootComplete = () => setCanStart(true);
        window.addEventListener("nekocorp:bootComplete", handleBootComplete);
        return () => window.removeEventListener("nekocorp:bootComplete", handleBootComplete);
      }
    } else {
      setCanStart(true);
    }
  }, []);

  useEffect(() => {
    if (!canStart) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay, canStart]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [displayedText, text, speed, hasStarted, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (!isTypingComplete || isTypingComplete) && (
        <span className="cursor-blink ml-1">{cursorChar}</span>
      )}
    </span>
  );
};

export default TypingText;
