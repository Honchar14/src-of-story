import {useState} from "react";
import "../Promo.css"
import ButtonMain from "../../../../assets/ui/ButtonMain.jsx";

const Slider = () => {
    return (
        <div className="promo_slider__content">
            <h2 className="slider_content__title">
                Choose <span className='red'>Your Shoes</span> With Us.
            </h2>
            <p className="slider_content__subtitle">
                We will help you choose the product that suits you best.
                And we mean it!
            </p>
            <ButtonMain className="slider_content__button">Read more</ButtonMain>
        </div>
    )
}

export default Slider