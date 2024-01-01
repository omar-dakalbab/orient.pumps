import React from 'react'
import BlogPosts from './BlogPosts'
import './style.css'
import { useTranslation } from "react-i18next";
 
const Blogs = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="blogs">
              <img src="/img/location-up.svg" id="blog-down" alt="blog-down" />
            <div className="blogs-title" style={{flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row'}}>
                <h1>{t("blogPosts")}</h1>
                <hr />
            </div>
            <BlogPosts />
        </div>
    )
}

export default Blogs