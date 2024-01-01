import React from 'react'
import Product from '../Components/Product/Product'
import ProductsC from '../Components/Products/ProductsC'
import Consult from '../Components/Home/Consult/Consult'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const ProductView = () => {
    return (
        <div>
            <div className="dark-navbar">
                <Navbar hamColor="#FFF"/>
            </div>
            <Product />
            <ProductsC />
            <Consult />
            <Footer />
        </div>
    )
}

export default ProductView