import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setShowCursor(false);
      }, 100); // Adjust the delay time (in milliseconds) to control the typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const cursorTimeout = setTimeout(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Adjust the cursor blinking speed (in milliseconds)

    return () => clearTimeout(cursorTimeout);
  }, [showCursor]);

  return (
    <p className="my-2 font-font3 font-thin">
      {displayText}
      {showCursor ? (
        <span className="text-[15.6px]">_</span>
      ) : (
        <span>&nbsp;&nbsp;&nbsp;</span>
      )}
    </p>
  );
};

export default Typewriter;
