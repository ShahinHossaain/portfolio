import React from "react";
import resume from "../../assets/Resume (1).pdf";
const CTA = () => {
  return (
    <div>
      <a href={resume} download>
        <button className="btn1"> Download Resume</button>
      </a>
      <a href="#contact">
        <button className="btn2 ml-5">Lets Talk</button>
      </a>
    </div>
  );
};

export default CTA;
