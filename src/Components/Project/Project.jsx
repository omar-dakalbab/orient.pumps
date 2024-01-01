import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const Project = () => {
    const { i18n } = useTranslation();

    const [data, setData] = useState([]);
    let { projectId } = useParams();

    useEffect(() => {
        getData()
    }, [projectId])
    const getData = () => {

        axios.get(`${import.meta.env.VITE_API}/req/project.php?id=${projectId}`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }


    return (
        <div className='project'>
            <Navbar />
            <div className="triangle">
                <div class="arrow-right"></div>
            </div>
            {data.map((val, key) => {
                return (
                    <div className="project-details" key={key}>
                        <h1>{i18n.language === "en" ? val.project_title : i18n.language === "ar" ? val.title_ar : val.title_tr}</h1>
                        <div className="project-img" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000">
                            <img src={"/uploads/" + val.img} alt="pr" />
                            <div className='bg-gray'>
                                {i18n.language === "en" ? val.project_title : i18n.language === "ar" ? val.title_ar : val.title_tr}
                            </div>
                        </div>
                        <div className="project-body">
                            <p>
                            {i18n.language === "en" ? val.project_body : i18n.language === "ar" ? val.body_ar : val.body_tr}
                            </p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Project