
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import ProjectDetails from "./ProjectDetails";
import HomePage from "../Pages/HomePage";
import AboutMe from "../Pages/AboutMe";


const AllComponent = () => {
  return (
    <>
    
      <Navbar />
      {/* <Header />
      <About />
      <ClientPage />
      <ClientShow />
    

      <ImageZoom />
      <Techonology />
      <Myprogress />
      <ContactMe /> */}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/Aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/projects/:id" element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
    
      <Footer />
  
    </>
  );
};

export default AllComponent;
