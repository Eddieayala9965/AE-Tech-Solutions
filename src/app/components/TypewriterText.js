"use client";
import { useState, useEffect } from "react";

const TypewriterText = ({ text, delay = 0, className = "" }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default TypewriterText;
