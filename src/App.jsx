import PageLayout from "./components/Layouts/PageLayout";
import Hero from "./components/Hero/Hero";
import Member from "./components/Member/Member";
import Galeri from "./components/Galeri/Galeri";
import Propre from "./components/ProjekPrestasi/Propre";
import Message from "./components/Message/Message";

const App = () => {
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
