import React from 'react'
import Footer from '../Components/Footer/Footer'
import About from '../Components/Home/About/About'
import Blogs from '../Components/Home/Blogs/Blogs'
import Consult from '../Components/Home/Consult/Consult'
import Contact from '../Components/Home/Contact/Contact'
import Header from '../Components/Home/Header/Header'
import Products from '../Components/Home/Products/Products'
import Projects from '../Components/Home/Projects/Projects'
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    return (
        <div className={lang == "ar" ? "arabic-font" : ""}>
            <Header />
            <About />
            <Projects />
            <Products />
            <Blogs />
            <Contact />
            <Consult />
            <Footer />
        </div>
    )
}

export default Home