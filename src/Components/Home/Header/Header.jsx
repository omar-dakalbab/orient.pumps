import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
import './style.css'
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pdfFile from './or.pdf'; // Import your PDF file

const Header = () => {
  const { t } = useTranslation();

  const images = [
    '/uploads/sce-pompa.png',
    '/uploads/dpt-pompa.png',
    '/uploads/272_272_ars-pompa.png',
    '/uploads/8492_8492_tkf-pompa2.png',
    // Add more image URLs as needed
  ];
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'orient-pumps.pdf';
    link.click();
  };
  return (
    <div className="home-header">
      <Navbar hamColor="#284651" />
      <div className="triangle">
        <div className="arrow-right"></div>
      </div>
      <div className={"o-header"}>
        <LazyLoadImage src="/img/header-lines.svg" id="lines-svg" alt="lines" />
        <div className="left-header">
          <div className="left-slogan">
            {t("header_slogan_left")}
          </div>
          <div>
            <div className="header-title">
              Orient Pumps
            </div>
            <div className="header-description">
              <p>
                {t("header_body")}
              </p>
            </div>
          </div>

          <div className="header-btn">
            <button onClick={handleDownload}>{t("nav_link6")}</button>
          </div>
        </div>
        <div className="right-header">
          <div className="right-slogan">
            {t("header_slogan_right")}
          </div>
          <div className="div-sc" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {/* <MdOutlineKeyboardArrowLeft onClick={substract} style={{ fontSize: 120 }} /> */}
            <div className="prodjj" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}
                transitionTime={500}
                showArrows={false}
              >
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>
            {/* <MdOutlineKeyboardArrowRight onClick={add} style={{ fontSize: 120 }} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header