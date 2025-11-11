import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Hero/Hero";
import Member from "./Member/Member";

const HeroMemberTransition = () => {
  const container = useRef(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Cek ukuran layar
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
    <main ref={container} className="relative h-[400vh] overflow-visible bg-primary">
      <motion.div
        style={
          isDesktop
            ? { scale: heroScale, rotate: heroRotate, zIndex: 1 }
            : { scale: 1, rotate: 0, zIndex: 1 }
        }
        className="sticky top-0 h-screen bg-[#f3f3ef]"
      >
        <Hero />
      </motion.div>

      <motion.div
        style={
          isDesktop
            ? { scale: memberScale, rotate: memberRotate, zIndex: 2 }
            : { scale: 1, rotate: 0, zIndex: 2 }
        }
        className="relative h-screen bg-black"
      >
        <Member />
      </motion.div>
    </main>
  );
};

export default HeroMemberTransition;
