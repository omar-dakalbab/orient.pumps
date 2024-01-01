import React from 'react'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import Consult from '../Components/Home/Consult/Consult'
const Aboutus = () => {
  return (
    <div>
      <div className="dark-navbar">
        <Navbar hamColor="#FFF"/>
      </div>
      <About />
      <Consult />
      <Footer />
    </div>
  )
}

export default Aboutus