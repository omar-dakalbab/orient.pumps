import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react'
import './style.css'
import { useTranslation } from "react-i18next";
import axios from 'axios'

const ConsultC = () => {
    const [age, setAge] = React.useState('');
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [status, setStatus] = useState("");
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        question: "",
        phone: "",
        product: ""
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
        formData.append('phone', inputs.phone);
        formData.append('question', inputs.question);
        formData.append('product', inputs.product);
        // Send axios request
        axios.post(`${import.meta.env.VITE_API}/req/sendConsult.php`, formData)
            .then(response => setStatus(response.data))
            .catch(error => console.error(error));
    }
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`${import.meta.env.VITE_API}/req/getProducts.php`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleDropDownChange = event => {
        setSelectedProduct(event.target.value);
    };
    return (
        <div className="consult-page">
            <img src="/img/contact-lines.png" id='contact-lines' alt="img" />
            <div className="contact-r">
                <h1>{t("sendAQuestion")}</h1>
                <input type="text" name='fullName' onChange={handleChange} placeholder={t("fullName")} />
                <input type="text" name='email' onChange={handleChange} placeholder={t("emailAddress")} />
                <input type="text" name='phone' onChange={handleChange} placeholder={t("phoneNumber")} />
                <h3>{t("product")}</h3>
                <FormControl sx={{ minWidth: 120 }} size="small">
                    <Select
                        name="product"
                        value={selectedProduct}
                        onChange={handleDropDownChange}
                    >
                        {products.map(product => (
                            <MenuItem key={product.id} value={i18n.language === "en" ? product.product_title : i18n.language === "ar" ? product.title_ar : product.title_tr}>
                                {i18n.language === "en" ? product.product_title : i18n.language === "ar" ? product.title_ar : product.title_tr}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <label htmlFor="textarea">{t("YourQuestion")}</label>
                <textarea name='question' onChange={handleChange} type="text" />
                <button onClick={handleSubmit}>{t("send")}</button>
                {status && <p>{status}</p>}
            </div>
            <div className="contact-l">
                <h1><span>{t("congrats")}</span></h1>
                <h4>{t("consultFree")}</h4>
                <p>
                    {t("consultp1")}
                    <br /><br />
                    {t("consultp2")}
                </p>
            </div>

        </div>
    )
}

export default ConsultC