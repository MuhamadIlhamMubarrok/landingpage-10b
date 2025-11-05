import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import PageLayout from "./components/Layouts/PageLayout";
import Hero from "./components/Hero/Hero";
import Member from "./components/Member/Member";
import Galeri from "./components/Galeri/Galeri";
import Propre from "./components/ProjekPrestasi/Propre";
import Message from "./components/Message/Message";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <PageLayout>
      <Hero />
      <Member />
      <Galeri />
      <Propre />
      <Message />
    </PageLayout>
  );
};

export default App;
