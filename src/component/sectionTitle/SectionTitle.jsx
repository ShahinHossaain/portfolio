import React from "react";
import { Bounce } from "react-awesome-reveal";

const SectionTitle = ({ children }) => {
  return (
    <Bounce>
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-secondary to-primary text-white py-2 px-4 rounded-tl-xl rounded-br-xl transform -skew-x-12">
          <span className="block font-semibold font-font1 text-xl md:text-3xl uppercase tracking-widest">
            {children}
          </span>
        </div>
      </div>
    </Bounce>
  );
};

export default SectionTitle;
