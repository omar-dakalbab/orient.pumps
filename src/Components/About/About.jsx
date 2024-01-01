import React from 'react'
import AboutL from './AboutL'
import AboutR from './AboutR'
import Line from './Line'
import './style.css'
import { useTranslation } from "react-i18next";
 
const About = () => {
    const { t } = useTranslation();
    return (
        <div className='about-header'>
              <img src="/img/logo.svg" id='project-down' alt="icon-down" />
              <img src="/img/logo.svg" id='project-up' alt="icon-down" />
              <img src="/img/header-lines.svg" id='line-about' alt="line-about" />
            <div className='about-c'>
                <div className="left-about">
                    <h1>Orient Pumps</h1>
                    <p>{t("AboutPage")}</p>
                </div>
                <div className="right-about">
                     <img src="/img/about-header.png" alt="about" />
                </div>
            </div>
            <Line />
            <AboutL />
            <AboutR />
        </div>
    )
}

export default About