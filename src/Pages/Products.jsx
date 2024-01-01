import React from 'react'
import Footer from '../Components/Footer/Footer'
import ProductsView from '../Components/Home/Products/Products'
import Navbar from '../Components/Navbar/Navbar'
import ProductsC from '../Components/Products/ProductsC'
const Products = () => {
  return (
    <div className="products-view">
      <div className='dark-navbar'>
        <Navbar hamColor="#FFF" />
      </div>
      <ProductsView turnoff={"true"} />
      <ProductsC />
      <Footer />
    </div>
  )
}

export default Products