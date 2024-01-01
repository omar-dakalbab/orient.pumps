import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { useTranslation } from "react-i18next";
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Consult = () => {
    const { t } = useTranslation();
    return (
        <LazyLoadComponent>
            <div className="consult"
                style={{
                    backgroundImage: "url(" + "/img/consult.png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >

                <div className="consult-wrapper">
                    {/*   <img src="/img/left-con.png" id='left-con' alt="left" />
                  <img src="/img/right-con.png" id='right-con' alt="right" /> */}
                    <h3>{t("consultHeader")}</h3>
                    <p>
                        {t("consultP")}
                    </p>
                    <Link to={'/consult'}> <button>{t("consultButton")}</button></Link>
                </div>

            </div>
        </LazyLoadComponent>
    )
}

export default Consult