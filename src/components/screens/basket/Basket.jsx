import React, {useState} from "react";
import "./Basket.css"
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useSelector, useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../redux/cart/reducer.js";


const Basket = () => {
    const flatPrice = 15;
    const products = useSelector(state => state.cart.itemsInCart)
    const totalPrice = products.reduce((acc, product) => acc += product.price, 0)
    const dispatch = useDispatch();
    const deleteFromCart = (productId) => {
        dispatch(deleteItemFromCart(productId));
    }

    const [quantities, setQuantities] = useState(
        products.reduce((quantities, product) => {
            quantities[product.id] = 1;
            return quantities;
        }, {})
    );

    const updateQuantity = (productId, newQuantity) => {
        setQuantities({
            ...quantities,
            [productId]: newQuantity,
        });
    };

    const calculateItemTotal = (product) => {
        const quantity = quantities[product.id];
        return quantity * product.price;
    };

    const calculateTotalPrice = () => {
        return products.reduce((total, product) => {
            return total + calculateItemTotal(product);
        }, 0);
    };



    return (
        <section className='basket'>
            <Banner>
                <h2>Basket</h2>
            </Banner>

            <div className='container'>
                <h2 className='basket_title'>Product</h2>
                <div className='basket_section'>
                    <div className='basket_container'>
                        {products.map((product, index) => (
                            <div key={index} className='basket_product'>
                                <button className='button_close' onClick={() => deleteFromCart(product.id)}>X</button>
                                <img src={product.img} alt="product_img" className='basket_product__img'/>
                                <div className='product_description'>
                                    <h2 className='basket_product__name'>{product.title}</h2>
                                    <h3 className='basket_product__color'>Color: {product.props ? product.props.color : "Color not selected"}</h3>
                                    <h3 className='basket_product__size'>Size: {product.props ? product.props.size : "Size not selected"}</h3>
                                </div>
                                <div className='basket_counter'>
                                    <input className='counter' value={quantities[product.id]} readOnly/>
                                    <div className='counter_controls'>
                                        <div>
                                            <KeyboardArrowLeftIcon className={'product-arrow'} onClick={() => updateQuantity(product.id, quantities[product.id] + 1)}/>
                                        </div>
                                        <div>
                                            <KeyboardArrowRightIcon className={'product-arrow'} onClick={() => updateQuantity(product.id, quantities[product.id] - 1)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="basket_price">{Number(calculateItemTotal(product)).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}</div>
                            </div>
                        ))}
                    </div>
                    <div className='basket_total'>
                        <h2 className='total_title'>Cart total</h2>
                        <div className='subtotal'>
                            <p className='total_name'>Subtotal:</p>
                            <p className='total_price'>{Number(calculateTotalPrice()).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}</p>
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
                            <h2 className='total_price'>{Number(calculateTotalPrice() + flatPrice).toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}</h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Basket