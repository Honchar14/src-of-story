import React, {useEffect, useState} from "react"
import './Promo.css'
import Slider from "./promoComponents/Slider.jsx";
import promoData from './promoData.js'
const Promo = () => {
    const [currentSlide, setCurrentSlide] = useState('/img/promo-2.jpg');
    const setRandomSlide = () => {
        const randomId = Math.floor(Math.random() * promoData.length);
        const selectedRandomImg = promoData[randomId]
        setCurrentSlide(selectedRandomImg.img)
    }

    useEffect(() => {
        let timer = setInterval(() => {
            setRandomSlide();
        },2000)
        return () => clearInterval(timer)
    },[]);


    return (
        <div className="promo" style={{backgroundImage: `url(${currentSlide})`}}>
            <div className='container'>
                <Slider/>
            </div>
        </div>
    );
};

export default Promo