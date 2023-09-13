import React, { useState } from "react";
import "./AboutProduct.css";
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import { ReferenceProductsContext } from "../../../assets/methods/Context.jsx";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import LeftSection from "./components/LeftSection.jsx";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer.js";

const AboutProduct = () => {
    const [productProp, setProductProp] = useState({
        id: -1,
        size: "",
        color: "",
        quantity: 1,
        totalPrice: 0,
    });

    const { products } = useContext(ReferenceProductsContext);
    const { productId } = useParams();
    const product = products.find((item) => item.id === Number(productId));

    const dispatch = useDispatch();

    const addToCart = (e) => {
        e.stopPropagation();
        const totalPrice = product.price * productProp.quantity;
        const updatedProduct = {
            ...product,
            quantity: 1,
        };
        dispatch(
            setItemInCart({
                ...updatedProduct,
                props: { ...productProp, totalPrice },
                id: updatedProduct.id,
            })
        );
    };

    const onSizeSelected = function (size) {
        setProductProp({
            ...productProp,
            size: size,
        });
    };

    const onColorSelected = function (color) {
        setProductProp({
            ...productProp,
            color: color,
        });
    };

    const addToWishlist = () => {
        console.log("wsp");
    };

    return (
        <section className="about_product">
            <Banner>
                <h2>Latest News</h2>
            </Banner>
            <div className="container">
                <div className="about_product_body">
                    {product && <LeftSection images={product.images} />}
                    {product && (
                        <div className="right_section">
                            <div className="right_section_subtitle">{product.description}</div>
                            <div className="right_section_title">{product.title}</div>
                            <div className="right_section_price">
                                {Number(product?.price).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                            </div>
                            <div className="right_section_size">
                                {product &&
                                    product.size.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`size ${productProp.size === item ? "active" : ""}`}
                                            onClick={() => onSizeSelected(item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                            </div>
                            <div className="right_section_color">
                                {product &&
                                    product.color.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`color ${productProp.color === item ? "active" : ""}`}
                                            style={{ backgroundColor: item }}
                                            onClick={() => onColorSelected(item)}
                                        ></div>
                                    ))}
                            </div>
                            <p className="right_section_description"></p>
                            <div className="right_section_btns">
                                <ButtonProducts className="button_cart button_about" onClick={addToCart}>
                                    Add to cart
                                </ButtonProducts>
                                <ButtonProducts className="button_wish" onClick={addToWishlist}>
                                    Add to wishlist
                                </ButtonProducts>
                            </div>
                            <p className="right_section_desctiption_two">
                                We champion continual progress for athletes and sport.
                            </p>
                        </div>
                    )}
                </div>
                <div className="other_product"></div>
            </div>
        </section>
    );
};

export default AboutProduct;
