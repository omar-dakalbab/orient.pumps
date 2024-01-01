import React from 'react'
import { useTranslation } from "react-i18next";
 
const AboutL = () => {
  const { t } = useTranslation();
  return (
    <div className="about-l">
        <img src="/img/about-l.png" alt="img" />
      <div className="body">
        <h1></h1>
        <p>
          {t("OurCompany1")}
          <br /><br />
          {t("OurCompany2")}
        </p>
        <p>
          {t("OurCompany3")}
          <br /><br />
          {t("OurCompany4")}
        </p>
      </div>
    </div>
  )
}

export default AboutL