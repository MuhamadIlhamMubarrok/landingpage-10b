import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero/Hero";
import Member from "./Member/Member";

const HeroMemberTransition = () => {
  const container = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  const memberScale = useTransform(scrollYProgress, [0.5, 1], [0.85, 1]);
  const memberRotate = useTransform(scrollYProgress, [0.5, 1], [5, 0]);

  return (
    <main ref={container} className="relative h-[400vh] overflow-visible bg-primary overscroll-none touch-none">
    <motion.div
      style={
        isDesktop
          ? { scale: heroScale, rotate: heroRotate, zIndex: 1 }
          : { scale: 1, rotate: 0, zIndex: 1 }
      }
      className="sticky top-0 min-h-[100dvh] bg-[#f3f3ef]"
    >
      <Hero />
    </motion.div>
    
    <motion.div
      style={
        isDesktop
          ? { scale: memberScale, rotate: memberRotate, zIndex: 2 }
          : { scale: 1, rotate: 0, zIndex: 2 }
      }
      className="relative min-h-[100dvh] bg-transparent overflow-hidden will-change-transform"
    >
      <div className="relative z-10">
        <Member />
      </div>
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </motion.div>
    </main>
  );
};

export default HeroMemberTransition;
