import React from 'react'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Consult from '../Components/Home/Consult/Consult'
const Contactus = () => {
  return (
    <div>
      <div className="dark-navbar">
        <Navbar hamColor="#FFF"/>
      </div>
      <Contact />
      <Consult />
      <Footer />
    </div>
  )
}

export default Contactus