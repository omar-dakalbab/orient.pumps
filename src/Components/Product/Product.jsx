import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import './style.css'
import React, { useEffect, useState, useRef } from 'react'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import { useTranslation } from "react-i18next";

const Product = () => {
    const [data, setData] = useState([]);
    let { productId } = useParams();
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    useEffect(() => {
        getData()
    }, [productId])
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/product.php?id=${productId}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className='product-comp'>
            {data.map((val, key) => {
                return (
                    <div key={key} className="product-view">
                        <div className="product-images">
                            <div className="sm-imgs">
                                <div style={{ cursor: 'pointer' }} onClick={() => setCurrentImgIndex(0)}>{val.images ? <img src={"/uploads/" + val.images} alt="img" className={currentImgIndex === 0 ? 'selected' : ''} /> : (<div></div>)}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => setCurrentImgIndex(1)}>{val.img1 ? <img src={"/uploads/" + val.img1} alt="img" className={currentImgIndex === 1 ? 'selected' : ''} /> : (<div></div>)}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => setCurrentImgIndex(2)}>{val.img2 ? <img src={"/uploads/" + val.img2} alt="img" className={currentImgIndex === 2 ? 'selected' : ''} /> : (<div></div>)}</div>
                                <div style={{ cursor: 'pointer' }} onClick={() => setCurrentImgIndex(3)}>{val.img3 ? <img src={"/uploads/" + val.img3} alt="img" className={currentImgIndex === 3 ? 'selected' : ''} /> : (<div></div>)}</div>
                            </div>
                            <div className="bg-img">
                                <img src={"/uploads/" + (currentImgIndex === 0 ? val.images : currentImgIndex === 1 ? val.img1 : currentImgIndex === 2 ? val.img2 : val.img3)} alt="img" />
                            </div>



                        </div>
                        <div className="product-info">
                            <h1>{i18n.language === "en" ? val.product_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</h1>
                            <p>{i18n.language === "en" ? val.product_dc : i18n.language === "ar" ? val.body_ar : val.body_tr}</p>
                            {/* <span id="price">$ {val.price}</span> */}

                            <div className="product-info-btns">
                                <button style={{ color: "#284651" }}>
                                    <a style={{ color: "#284651" }} href="https://api.whatsapp.com/send/?phone=905379118385&text&type=phone_number&app_absent=0">
                                        {t("TeklifAl")}
                                    </a>
                                </button>

                                {val.pdfFile ?
                                    (
                                        <a id='download-button' href={`${import.meta.env.VITE_URL}/${val.pdfFile}`}
                                            download={val.product_title + `.pdf`}
                                        >
                                            {t("downloadPDF")}
                                            <BsFileEarmarkPdf fontSize={25} style={{ marginLeft: 10 }} />
                                        </a>
                                    )
                                    :
                                    (
                                        <div></div>
                                    )
                                }
                            </div>

                            <div className="sabit-img">
                                <img src={"/uploads/" + val.imgsabit} alt="s" />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="partners">
                <div className="partner">
                    <img src="/img/i1.jpg" alt="img" />
                </div>
                <div className="partner">
                    <img src="/img/i2.jpg" alt="img" />
                </div>
                <div className="partner">
                    <img src="/img/i3.jpg" alt="img" />
                </div>
                <div className="partner">
                    <img src="/img/i4.jpg" alt="img" />
                </div>
                <div className="partner"><img src="/img/i5.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i6.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i7.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i8.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i9.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i10.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i11.jpg" alt="img" /></div>
                <div className="partner"><img src="/img/i12.jpg" alt="img" /></div>
            </div>
        </div>
    );
}

export default Product;

