import React from "react";
import "./Products.css"
import ProductsItems from "./productsComponents/ProductsItems.jsx";


const Products = () => {
    return (
        <section className='products'>
            <div className='container'>
                <div className='products_section'>
                    <h2 className='products_title'><span className='red'>Our</span> products</h2>
                    <ProductsItems />
                </div>
            </div>
        </section>

    )
}

export default Products