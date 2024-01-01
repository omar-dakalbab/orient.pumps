import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";
const Post = () => {
    const [data, setData] = useState([]);
    let { postId } = useParams();
    const { i18n } = useTranslation();
    useEffect(() => {
        getData()
    }, [postId])
    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/blog.php?id=${postId}`)
            .then(response => {
                setData(response.data)

            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <div className="post">
            <Navbar />
            <div className="triangle">
                <div class="arrow-right"></div>
            </div>
            {data.map((val, key) => {
                return (
                    <div key={key} className="post-details">
                        <h1>{i18n.language === "en" ? val.blog_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</h1>
                        <div className="post-img">
                            <img src={"/uploads/" + val.blog_img} alt="s" />
                        </div>
                        <div className="post-body">
                            <p>
                                {i18n.language === "en" ? val.blog_body : i18n.language === "ar" ? val.body_ar : val.body_tr}
                            </p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Post    