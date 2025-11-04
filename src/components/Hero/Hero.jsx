import React from "react";
import "../../index.css";
import heroimg from "../../assets/2025.png";

const Hero = () => {
  return (
    <div className="bg-accent text-primary min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <img src={heroimg} alt="2025" className="w-[95vw] lg:w-[85vw] lg:mt-28"/>
      <p className="font-hanson text-sm mt-10 text-center text-blood">
        20’s Best Decade Ever
      </p>
    </div>
  );
};

export default Hero;