import React from 'react'
import './style.css'
import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const About = () => {
  const { t, i18n } = useTranslation();
 
  return (
    <LazyLoadComponent>
      <div className="about">
        <div className="about-title" style={{flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row'}}>
          <h1>
            {t("nav_link4")}
          </h1>
          <hr />
        </div>
        <div className="about-p">
          <p>
            {t("about")}
          </p>
        </div>
      </div>
    </LazyLoadComponent>
  )
}

export default About
