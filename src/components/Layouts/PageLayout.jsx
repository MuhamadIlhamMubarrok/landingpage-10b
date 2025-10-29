import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const PageLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
export default PageLayout;
