import React from 'react'
import Header from '../Components/Header'
import ContactMe from './Components/Contact'
import Address from './Components/Address'
import Footer from '../About/Components/Footer'

const Contact = () => {
  return (
    <div>
        <Header/>
        <ContactMe/>
        <Address/>
        <Footer/>
    </div>
  )
}

export default Contact