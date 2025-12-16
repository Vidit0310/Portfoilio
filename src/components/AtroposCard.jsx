import React from "react";
import Atropos from "atropos/react";
import "atropos/css";

import image from "../assets/images/OCRS.png"
const AtroposCard = () => {
  return (
    <div className="">
      <Atropos
        active={true}
        shadow={true}
        highlight={false}               // Removes blue hover background
        rotateXMax={40}
        rotateYMax={40}
        duration={700}
        className="relative w-3/6 h-auto rounded-lg overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Single Image with Multiple Depth Effects */}
        <img
          src={image}
          alt="3D Depth Effect"
          className="w-full h-full object-cover"
          data-atropos-offset="15"      // Adds depth effect to the whole image
        />
      </Atropos>
    </div>
  );
};

export default AtroposCard;
