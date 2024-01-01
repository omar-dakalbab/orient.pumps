import './style.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { MdKeyboardArrowDown } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

const ProductsC = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/getProducts.php`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }
    const { i18n } = useTranslation();
    return (
        <div className='products-component'>
            <h1>{t("exploreProducts")}</h1>
            <MdKeyboardArrowDown fontSize={50} color={'#284651'} style={{ marginBottom: 25 }} />
            <div className="product-cards">
                {data.map((val, key) => {
                    return (
                        <Link to={'/product/' + val.id} style={{ margin: 10 }}>
                            <div key={key} className="pro-card" data-aos="zoom-in-down" data-aos-delay="100" data-aos-duration="1000">
                                <img src={"/uploads/" + val.images} alt="img" />
                                <h3>{i18n.language === "en" ? val.product_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</h3>

                                <button>{t("exploreProducts")}</button>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsC