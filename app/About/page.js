import React from 'react'
import Header from '../Components/Header'
import AboutHero from './Components/AboutHero'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Footer from './Components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <AboutHero/>
        <Education/>
        <Experience/>
        <Footer/>
    </div>
  )
}

export default About