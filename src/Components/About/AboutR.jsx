import React from 'react'
import { useTranslation } from "react-i18next";
 
const AboutR = () => {
  const { t } = useTranslation();
  return (
    <div className="about-r">
        <img src="/img/about-l.png" alt="img" />
      <div className="body">
        <h1>{t("InformationTitle")}</h1>
        <p>
          {t("Information1")}
          <br /><br />
          {t("Information2")}
        </p>
        <p>
          {t("Information3")}
        </p>
        <p>
          {t("Information4")}
        </p>
      </div>

    </div>
  )
}

export default AboutR