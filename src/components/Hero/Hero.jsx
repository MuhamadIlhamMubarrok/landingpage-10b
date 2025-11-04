import React from "react";
import "../../index.css";
import yearImage from "../../assets/2025.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-accent text-primary min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    
      <div className="absolute top-6 left-8 text-[11px] font-bold uppercase tracking-[0.15em] leading-tight glow-red">
        SMA PLUS ABUDZAR
        <br />
        00:00 WIB
      </div>

     
      <div className="absolute top-6 right-8 text-[11px] font-bold uppercase tracking-[0.15em] leading-tight text-right glow-red">
        X CLASS
        <br />
        INDONESIA
      </div>

     
      <img
        src={yearImage}
        alt="2025"
        className="w-[80vw] max-w-[800px] object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]"
      />

   
      <p className="font-bold text-sm tracking-[0.2em] mt-10 glow-red uppercase text-center">
        20’s Best Decade Ever
      </p>
    </div>
  );
};

export default Hero;
