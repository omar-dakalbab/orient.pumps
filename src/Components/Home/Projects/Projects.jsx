import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Projects = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/getProjects.php`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });

    }
    const { i18n } = useTranslation();
    return (
        <div className="projects">
            <img src="/img/project-up.svg" id='project-up' alt="icon-up" />
            <img src="/img/watermark.svg" id='project-down' alt="icon-down" />
            <div className="projects-title" style={{ flexDirection: i18n.language == "ar" ? 'row-reverse' : 'row' }}>
                <h1>{t("Projects")}</h1>
                <hr />
            </div>
            <div className="project-posts">
                {
                    data.slice(0, 3).map((val, key) => {
                        return (
                            <Link to={'/project/' + val.id} style={{ color: "#fff" }}>
                                <div key={key} className="project-post" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
                                    <LazyLoadImage src={"/uploads/" + val.img} alt="img" />

                                    <div className="project-info">
                                        <h2>{i18n.language === "en" ? val.project_title.substring(0, 40) : i18n.language === "ar" ? val.title_ar.substring(0, 40) : val.title_tr.substring(0, 40)}...</h2>

                                        <button>{t("ReadingMore")}</button>
                                    </div>

                                </div>
                            </Link>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Projects