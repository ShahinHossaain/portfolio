import React, { useState, useEffect } from "react";

const ChangeText = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Web_Developer", "MERN_Developer", "Experts_In_React"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]); // Re-run effect when `text` changes

  const tick = () => {
    const i = loopNum % toRotate.length; // Find the current word
    const fullText = toRotate[i];

    // Update text based on whether we're deleting or typing
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Adjust typing speed
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // Switch modes when word is complete or cleared
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period); // Pause before deleting
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1); // Move to the next word
      setDelta(400); // Speed up typing for the next word
    }
  };

  return (
    <span className="text-xl md:text-2xl font-font5">{text}</span>
  );
};

export default ChangeText;
