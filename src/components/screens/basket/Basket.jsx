import React, {useState} from "react";
import "./Basket.css"
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ClassBasket, {globalBasket} from "./classes/ClassBasket.js";

const Basket = () => {
    const [basket, setBasket] = useState(globalBasket);
    const [key, setKey] = useState(0);
    const flatPrice = 15;


    const handleRemoveFromCart = (product) => {
        basket.deleteFromCard(product);
        setKey(Math.random());
    }

    const increase = (id) => {
        basket.increaseQuantity(id);
        setKey(Math.random());
    };

    const decrease = (id) => {
        basket.decreaseQuantity(id);
        setKey(Math.random());
    };


    const getTotalQuantity = () => {
        let totalQuantity = 0;
        for (const product of basket.productArr) {
            totalQuantity += product.quantity;
        }
        return totalQuantity;
    };


    return (
        <section key={key} className='basket'>
            <Banner>
                <h2>Basket</h2>
            </Banner>

            <div className='container'>
                <h2 className='basket_title'>Product</h2>
                <div className='basket_section'>
                    <div className='basket_container'>
                        {basket.productArr.map((product, index) => (
                            <div className='basket_product' key={index}>
                                <button
                                    className='button_close'
                                    onClick={() => handleRemoveFromCart(product)}>X
                                </button>
                                <img src={product.img} alt="product_img" className='basket_product__img'/>
                                <div className='product_description'>
                                    <h2 className='basket_product__name'>{product.title}</h2>
                                    <h3 className='basket_product__color'>Color:  {product.props ? product.props.color : undefined}</h3>
                                    <h3 className='basket_product__size'>Size:  {product.props ? product.props.size : undefined}</h3>
                                </div>
                                <div className='basket_counter'>
                                    <input className='counter' value={product.quantity}/>
                                    <div className='counter_controls'>
                                        <KeyboardArrowLeftIcon className={'product-arrow'}
                                                               onClick={() => increase(product.id)}/>
                                        <KeyboardArrowRightIcon className={'product-arrow'}
                                                                onClick={() => decrease(product.id)}/>
                                    </div>
                                </div>
                                <div className="basket_price">{product.quantity * product.price}$</div>
                            </div>
                        ))}
                    </div>
                    <div className='basket_total'>
                        <h2 className='total_title'>Cart total</h2>
                        <div className='subtotal'>
                            <p className='total_name'>Subtotal:</p>
                            <p className='total_price'>{basket.totalSum()}$</p>
                        </div>
                        <div className='shipping'>
                            <h2 className='total_title'>Shipping</h2>
                            <div className='total_shipping'>
                                <p className='total_flat total_name'>flat right: {flatPrice}$</p>
                                <p className='total_city total_name'>Where to: London UK</p>
                            </div>
                        </div>
                        <div className='total'>
                            <h2 className='total_title'>Total</h2>
                            <h2 className='total_price'>{basket.totalSum() + flatPrice}$</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Basket