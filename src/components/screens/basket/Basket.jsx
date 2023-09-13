import React from "react";
import "./Basket.css";
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {useSelector, useDispatch} from "react-redux";
import {deleteItemFromCart, increaseQuantity, decreaseQuantity,} from "../../redux/cart/reducer.js";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import {Link} from "react-router-dom";

const Basket = () => {
    const flatPrice = 15;
    const products = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = products.reduce((acc, product) => {
        return acc + (product.props.totalPrice * product.props.quantity);
    }, 0);
    const dispatch = useDispatch();
    console.log(products);

    const deleteFromCart = (product_props) => {
        dispatch(deleteItemFromCart(product_props));
    };

    const increaseProductQuantity = (product_props) => {
        dispatch(increaseQuantity(product_props));
    };

    const decreaseProductQuantity = (product_props) => {
        dispatch(decreaseQuantity(product_props));
    };

    return (
        <section className="basket">
            <Banner>
                <h2>Basket</h2>
            </Banner>

            <div className="container">
                <h2 className="basket_title">Product</h2>
                <div className="basket_section">
                    <div className="basket_container">
                        {products.map((product) => (
                            <div key={product.id} className="basket_product">
                                <button
                                    className="button_close"
                                    onClick={() => deleteFromCart(product.props)}
                                >
                                    X
                                </button>
                                <img
                                    src={product.img}
                                    alt="product_img"
                                    className="basket_product__img"
                                />
                                <div className="product_description">
                                    <h2 className="basket_product__name">{product.title}</h2>
                                    <h3 className="basket_product__color">
                                        Color: {product.props ? product.props.color : "Color not selected"}
                                    </h3>
                                    <h3 className="basket_product__size">
                                        Size: {product.props ? product.props.size : "Size not selected"}
                                    </h3>
                                </div>
                                <div className="basket_counter">
                                    <span className="counter">{product.props.quantity}</span>
                                    <div className="counter_controls">
                                        <button
                                            onClick={() => increaseProductQuantity(product.props)}
                                        >
                                            <KeyboardArrowLeftIcon className={"product-arrow"}/>
                                        </button>
                                        <button
                                            onClick={() => decreaseProductQuantity(product.props)}
                                        >
                                            <KeyboardArrowRightIcon className={"product-arrow"}/>
                                        </button>
                                    </div>
                                </div>
                                <div className="basket_price">
                                    {product.price * product.props.quantity}$
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='basket_total_block'>
                        <div className="basket_total">
                            <h2 className="total_title">Cart total</h2>
                            <div className="subtotal">
                                <p className="total_name">Subtotal:</p>
                                <p className="total_price">{totalPrice}$</p>
                            </div>
                            <div className="shipping">
                                <h2 className="total_title">Shipping</h2>
                                <div className="total_shipping">
                                    <p className="total_flat total_name">flat rate: {flatPrice}$</p>
                                    <p className="total_city total_name">Where to: London UK</p>
                                </div>
                            </div>
                            <div className="total">
                                <h2 className="total_title">Total</h2>
                                <h2 className="total_price">{totalPrice + flatPrice}$</h2>
                            </div>
                        </div>
                        <Link to='/checkout' className='checkout_lick'>
                            <ButtonProducts className={'checkout_btn'}>Checkout</ButtonProducts>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Basket;
