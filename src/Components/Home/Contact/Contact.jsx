import React from 'react'
import './style.css'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdCall } from 'react-icons/io'
import { GrMail } from 'react-icons/gr'
import Map from '../../Map'
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="contact">
            <img src="/img/blog-down.svg" id='blog-down' alt="blog-down" />
            <div className="contact-title" style={{flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row'}}>
            
                <h1>{t("contactText")}</h1>
                <hr />
            </div>
            <div className="flex">
                <div className="map">
                    <Map />
                </div>
                {/* <div style={{ fontSize: '3vw', margin: 40 }}>
                    <BiExpandHorizontal/>
                </div> */}
                <div className="contact-info">
                    <h3>{t("nav_link5")}</h3>
                    <div className="social-parts">
                        <div className="social-part">
                            <div className="icon"><IoLocationSharp id='contact-icon' /></div>
                            <h2>{t("address")}</h2>
                            <p>İncili Pınar Mah. Nail Bilen Cad.<br /><br /></p>
                            <p>Uğur Plaza No: 5 No 194 <br /><br /> <br /> Şehitkamil / Gaziantep</p>
                        </div>
                        <div className="social-part">
                            <div className="icon"><IoMdCall id='contact-icon' /></div>
                            <h2>{t("phone")}</h2>
                            <p>+90 537 911 83 85</p>
                        </div>
                        <div className="social-part">
                            <div className="icon"><GrMail id='contact-icon' /></div>
                            <h2>{t("email")}</h2>
                            <p>info@orientpumps.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact