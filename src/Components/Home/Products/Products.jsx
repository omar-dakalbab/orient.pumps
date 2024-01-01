import React from 'react'
import './style.css'
import Scroll from './Scroll'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const Products = (props) => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    return (
        <div className="products">
            {props.turnoff ? ("") :
                <div className="div-yellow"></div>
            }
            <div className="products-title" style={{ flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row' }}>
                <h1>{t("ourProducts")}</h1>
                <hr />
            </div>
            <div className="products-desc">
                <p>
                    {t("bestSellers1")}
                    <br /><br />
                    {t("bestSellers2")}
                </p>
            </div>
            {props.turnoff ? ("") :
                <div className="product-group" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">
                    <Scroll />
                </div>
            }
            {/* <div className="circles">
                <div className="circle"></div>
                <div className="circle active"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div> */}
            {props.turnoff ? ("") :
                <div className="explore-btn">
                    <Link to={'/products'}><button>{t("exploreProducts")}</button></Link>
                </div>
            }
        </div>
    )
}

export default Products