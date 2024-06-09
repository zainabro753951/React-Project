import React from 'react'
import Header from '../Components/Header'
import Services from './Components/Services'
import Testimonial from './Components/Testimonial'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Clients from './Components/Clients'
import Footer from '../About/Components/Footer'

const Strength = () => {
  return (
    <div>
        <Header/>
        <Services/>
        <Testimonial/> 
        <Skills/>
        <Projects/>
        <Clients/>
        <Footer/>
    </div>
  )
}

export default Strength