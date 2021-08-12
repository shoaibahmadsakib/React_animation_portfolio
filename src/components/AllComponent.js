import About from "./About";
import ClientPage from "./ClientPage";
import ClientShow from "./ClientShow";
import Header from "./Header";
import ImageZoom from "./ImageZoom";
import Techonology from "./Techonology";
import Myprogress from "./Myprogress";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {BrowserRouter as Router } from "react-router-dom";

const AllComponent = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <About />
      <ClientPage />
      <ClientShow />
      <ImageZoom />
      <Techonology />
      <Myprogress />
      <ContactMe />
      <Footer />
    </Router>
  );
};

export default AllComponent