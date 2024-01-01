import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import LanguageSwitcher from '../LanguageSwitcher'
import { useTranslation } from "react-i18next";
import pdfFile from '../Home/Header/or.pdf'; // Import your PDF file

const Navbar = (props) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'orient-pumps.pdf';
    link.click();
  };
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={'/'}>  <img src="/img/logo-new.svg" alt="logo" id='desktop' /></Link>
        <Link to={'/'}>  <img src="/img/logo.svg" alt="logo" id='mobile' /></Link>
      </div>
      <div className="burger-btn">
        <RxHamburgerMenu color={props.hamColor} style={{ fontSize: 40 }} onClick={() => { setOpen(true) }} />
      </div>
      <div className="nav-links">
        <ul>
          <Link to={'/products'}><li>{t("nav_link1")}</li></Link>
          <Link to={'/projects'}><li>{t("nav_link2")}</li></Link>
          <Link to={'/posts'}><li>{t("nav_link3")}</li></Link>
          <Link to={'/about'}><li>{t("nav_link4")}</li></Link>
          <Link to={'/contact'}><li>{t("nav_link5")}</li></Link>
          <li onClick={handleDownload}>{t("nav_link6")}</li>
          <LanguageSwitcher />
        </ul>

      </div>
      {open ? (
        <div className="nav-links-burger">
          <ul>
            <Link to={'/products'}><li>{t("nav_link1")}</li></Link>
            <Link to={'/projects'}><li>{t("nav_link2")}</li></Link>
            <Link to={'/posts'}><li>{t("nav_link3")}</li></Link>
            <Link to={'/about'}><li>{t("nav_link4")}</li></Link>
            <Link to={'/contact'}><li>{t("nav_link5")}</li></Link>
            <li onClick={handleDownload}>{t("nav_link6")}</li>
            <li><LanguageSwitcher /></li>
            <li>  <img src="/img/logo.svg" alt="img" /></li>

          </ul>
          <AiOutlineClose color='#fff' style={{ margin: 20, fontSize: 40 }} onClick={() => { setOpen(false) }} />
        </div>
      )
        :
        (
          <div></div>
        )
      }
    </div>
  )
}

export default Navbar