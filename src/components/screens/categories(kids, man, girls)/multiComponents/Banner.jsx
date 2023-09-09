import React from "react";
import "../GirlsMansKids.css"

const Banner = ({children}) => {
    return (
        <div className='mans_banner'>
            <video className="video_bg" autoPlay muted loop>
                <source src="../../../../../public/img/skate.mp4" type="video/mp4" />
            </video>
            <div className="overlay">
                <div className="container">{children}</div>
            </div>
        </div>
    )
}

export default Banner