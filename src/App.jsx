import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import "./index.css";
import PageLayout from "./components/Layouts/PageLayout";
import HeroMemberTransition from "./components/HeroMemberTransition";
import Galeri from "./components/Galeri/Galeri";
import Propre from "./components/ProjekPrestasi/Propre";
import Message from "./components/Message/Message";
import Footer from "./components/Footer/Footer";

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

    return () => lenis.destroy();
  }, []);

  return (
    <PageLayout>
      <HeroMemberTransition />
      <Galeri />
      <Propre />
      <Message />
      <Footer />
    </PageLayout>
  );
};

export default App;