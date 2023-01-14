import React from 'react'
import About from '../components/About'
import ClientShow from '../components/ClientShow'
import ClientPage from "../components/ClientPage"
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import ImageZoom from '../components/ImageZoom'
import Myprogress from '../components/Myprogress'
import Techonology from '../components/Techonology'

const HomePage = () => {
  return (
    <>
      <Header />
      <About />
      <ClientPage />
      <ClientShow />
    

      <ImageZoom />
      <Techonology />
      <Myprogress />
      <ContactMe />
    </>
  )
}

export default HomePage