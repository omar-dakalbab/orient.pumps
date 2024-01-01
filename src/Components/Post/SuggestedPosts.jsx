import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import { useTranslation } from "react-i18next";
const SuggestedPosts = () => {
    const [data, setData] = useState([]);
    const { i18n } = useTranslation();
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/getBlogs.php`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });

    }
    return (
        <div className='popular-posts'>
            <h1>Popular Posts</h1>
            <div className="suggested-posts">
                {
                    data.slice(0, 3).map((val, key) => {
                        return (
                            <div className="post-card">
                                  <img src={"/uploads/" + val.blog_img} alt="ds" />
                                <h2>{i18n.language === "en" ? val.blog_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</h2>
                                <p>{i18n.language === "en" ? val.blog_body : i18n.language === "ar" ? val.body_ar : val.body_tr}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default SuggestedPosts