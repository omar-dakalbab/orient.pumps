import React from 'react'
import './style.css'
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className="footer">
            <div className="triangle">
                <div className="arrow-right"></div>
            </div>
            <div className="footer-up">
                <div className="footer-sec">
                    <div className="logo">
                        <Link to={'/'}>  <img src="/img/logo-new.svg" alt="logo" /></Link>
                        <p>{t("FooterLogo")}</p>
                    </div>
                </div>
                <div className="footer-sec">
                    <h3>{t("QuickLinks")}</h3>
                    <ul>
                        <Link to={'/products'}><li>{t("nav_link1")}</li></Link>
                        <Link to={'/projects'}><li>{t("nav_link2")}</li></Link>
                        <Link to={'/posts'}><li>{t("nav_link3")}</li></Link>
                        <Link to={'/about'}><li>{t("nav_link4")}</li></Link>
                        <Link to={'/contact'}><li>{t("nav_link5")}</li></Link>
                    </ul>
                </div>
                <div className="footer-sec">
                    <h2>{t("FooterNewsLetter")}</h2>
                    <p>{t("FooterAfterNews")}</p>
                    <div className="input">
                        <input type="text" placeholder={t("YourEmail")} />
                        <BsArrowRight id='arrow' />
                    </div>

                </div>
            </div>
            <div className="footer-down">
                <div className='pp'>
                    <div className="follow-us">
                        <h2>{t("FollowUs")}</h2>
                        <div className="social">
                            <a style={{ color: "#0F2F3C", cursor: "pointer" }} href="https://instagram.com/orientpumps"> <div><AiOutlineInstagram style={{ fontSize: 30 }} /></div></a>
                            <a style={{ color: "#0F2F3C", cursor: "pointer" }} href="https://www.facebook.com/OrientPumps1"><div><AiOutlineFacebook style={{ fontSize: 30 }} /></div></a>
                            <a style={{ color: "#0F2F3C", cursor: "pointer" }} href="https://api.whatsapp.com/send/?phone=905379118385&text&type=phone_number&app_absent=0">  <div><AiOutlineWhatsApp style={{ fontSize: 30 }} /></div></a>
                        </div>
                    </div>
                    {t("Rights")}
                    <br /><br />
                    {/* <p style={{ fontSize: 12 }}>Website Developed by <a style={{ color: '#000' }} href="https://www.instagram.com/omar._developer/?hl=en">
                        Omar Dakelbab
                    </a></p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer