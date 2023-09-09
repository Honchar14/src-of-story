import React from "react";
import "../Products.css"
import ButtonProducts from "../../../../assets/ui/ButtonProducts.jsx";
import {productsService} from "../../../../assets/methods/products.service.js";

const ProductsItems = () => {
    const products = productsService.getProductsByRange(0, 7);

    return (
        <div className='products_block'>
            {products.map(product => (
                <div className='product' key={product.id}>
                    <img src={product.img} alt="product-img"/>
                    <div className='product_content'>
                        <div className='product_brand'>{product.brand}</div>
                        <div className='product_title'>{product.title}</div>
                        <div className='product_price'>
                            {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(product.price)}
                        </div>
                        <ButtonProducts>Read more</ButtonProducts>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductsItems