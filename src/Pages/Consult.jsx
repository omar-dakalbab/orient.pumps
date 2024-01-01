import React from 'react'
import ConsultC from '../Components/Consult/ConsultC'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Consult = () => {
    return (
        <div>
            <div className="dark-navbar">
                <Navbar hamColor="#FFF" />
            </div>
            <ConsultC />
            <Footer />
        </div>
    )
}

export default Consult