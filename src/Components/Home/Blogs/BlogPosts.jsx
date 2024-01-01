import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const BlogPosts = () => {
    const [data, setData] = useState([]);
    const { i18n } = useTranslation();
    const { t } = useTranslation();
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
        <div className="blog-posts">
            {
                data.slice(0, 3).map((val, key) => {
                    return (
                        <Link to={`/post/${val.id}`} style={{color: "#fff"}}>
                            <div
                                key={key}
                                className="blog-post"
                                data-aos="zoom-in-up"
                                data-aos-delay="100"
                                data-aos-duration="1000"
                            >

                                <LazyLoadImage src={"/uploads/" + val.blog_img} alt="blog" />

                                <p>{i18n.language === "en" ? val.blog_title.substring(0, 75) : i18n.language === "ar" ? val.title_ar.substring(0, 75) : val.title_tr.substring(0, 40)}...</p>


                                <button>{t("ReadingMore")}</button>

                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default BlogPosts