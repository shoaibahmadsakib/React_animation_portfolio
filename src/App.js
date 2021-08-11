import React, { useState, useEffect } from "react";
import About from "./components/About";
import ClientPage from "./components/ClientPage";
import ClientShow from "./components/ClientShow";
import Header from "./components/Header";
import ImageZoom from "./components/ImageZoom";
import Portfolio from "./components/portfolio";
import "./App.css";
import Techonology from "./components/Techonology";
import Myprogress from "./components/Myprogress";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "react-loader-spinner";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loder from "./components/Loader/Loder";
const App = () => {
  const [isloder, setisLoder] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoder(false);
    }, 3000);
  }, []);

  return (
    <>
      {isloder == true ? (
        <Loder />
      ) : (
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
      )}
    </>
  );
};

export default App;
