import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../../index.css";
import heroimg from "../../assets/2025.png";

const Hero = () => {
  const [time, setTime] = useState("");
  const [isDesktop, setIsDesktop] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 15 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 15 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);


  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Jakarta",
      };
      setTime(new Intl.DateTimeFormat("id-ID", options).format(now));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, mouseX, mouseY]);

  return (
    <div className="bg-secondary text-primary min-h-screen flex flex-col items-center justify-center relative overflow-hidden perspective-[1000px]">
      <nav className="absolute top-0 left-0 w-full z-10 p-5">
        <div className="flex justify-between items-center text-[11px] font-hanson uppercase leading-tight underline text-primary">
          <div>
            SMA PLUS ABUDZAR
            <br />
            {time ? `${time} WIB` : "00:00 WIB"}
          </div>

          <div className="text-right">
            X CLASS
            <br />
            INDONESIA
          </div>
        </div>
      </nav>

      <motion.img
        src={heroimg}
        alt="2025"
        style={
          isDesktop
            ? {
                rotateX,
                rotateY,
                x: translateX,
                y: translateY,
                transformStyle: "preserve-3d",
              }
            : {
                rotateX: 0,
                rotateY: 0,
                x: 0,
                y: 0,
              }
        }
        className="w-[95vw] lg:w-[60vw] lg:mt-20 will-change-transform"
      />

      <p className="font-hanson text-sm mt-10 text-center">
        20’s Best Decade Ever
      </p>
    </div>
  );
};

export default Hero;
