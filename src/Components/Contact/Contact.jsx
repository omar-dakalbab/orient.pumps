import React, { useState } from 'react'
import './style.css'
import { useTranslation } from "react-i18next";
import axios from 'axios'
 
const Contact = () => {
    const [status, setStatus] = useState("");
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        message: "",
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object
        const formData = new FormData();

        // Append the form data to the FormData object
        formData.append('fullName', inputs.fullName);
        formData.append('email', inputs.email);
        formData.append('message', inputs.message);

        // Send axios request
        axios.post(`${import.meta.env.VITE_API}/req/sendMail.php`, formData)
            .then(response => setStatus(response.data))
            .catch(error => console.error(error));
    }

    const { t } = useTranslation();
    return (
        <div className='contact-page'>
              <img src="/img/contact-lines.png" id='contact-lines' alt="img" />
            <div className="contact-l">
                <h4><span>{t("ContactSpan1")}</span> {t("ContactTitle1")}</h4>
                <h1>{t("ContactTitle2")} <span>{t("ContactSpan2")}</span></h1>
                <p>
                    {t("ContactP")}
                </p>
            </div>
            <div className="contact-r">
                <h1>{t("sendMessage")}</h1>
                <input type="text" name='fullName' placeholder={t("fullName")} onChange={handleChange} />
                <input type="text" name='email' placeholder={t("emailAddress")} onChange={handleChange} />
                <label htmlFor="textarea">{t("message")} </label>
                <textarea name='message' type="text" onChange={handleChange} />
                <button onClick={handleSubmit}>{t("nav_link5")}</button>
                {status && <p>{status}</p>}
            </div>
        </div>
    )
}

export default Contact