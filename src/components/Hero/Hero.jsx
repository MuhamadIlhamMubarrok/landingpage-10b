import React from "react";
import "../../index.css";
import heroimg from "../../assets/2025.png";

const Hero = () => {
  return (
    <div className="bg-secondary text-primary min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <img src={heroimg} alt="2025" className="w-[95vw] lg:w-[60vw] lg:mt-20"/>
      <p className="font-hanson text-sm mt-10 text-center">
        20’s Best Decade Ever
      </p>
    </div>
  );
};

export default Hero;