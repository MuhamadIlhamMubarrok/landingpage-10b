import React from "react";
import "../../index.css";
import yearImage from "../../assets/2025.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-black text-red-600 min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-8 md:px-12 lg:px-20">

      {/* kiri atas */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 text-[9px] sm:text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] leading-tight glow-red">
        SMA PLUS ABUDZAR
        <br />
        00:00 WIB
      </div>

      {/* kanan atas */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[9px] sm:text-[11px] md:text-[13px] font-bold uppercase tracking-[0.15em] leading-tight text-right glow-red">
        X CLASS
        <br />
        INDONESIA
      </div>

      {/* gambar angka 2025 */}
      <img
        src={yearImage}
        alt="2025"
        className="w-[85vw] sm:w-[75vw] md:w-[60vw] lg:w-[45vw] max-w-[800px] object-contain drop-shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all duration-500"
      />

     
      <p className="font-bold text-[10px] sm:text-sm md:text-base lg:text-lg tracking-[0.2em] mt-8 sm:mt-10 glow-red uppercase text-center">
        20’s Best Decade Ever
      </p>
    </div>
  );
};

export default Hero;
