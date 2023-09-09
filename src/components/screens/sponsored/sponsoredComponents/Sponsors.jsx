import React from "react";
import sponsorsData from "../sponsorsData.js";
import "../Sponsor.css"

const Sponsors = () => {
    return (
        <div className='sponsor_block'>
            {sponsorsData.map(sponsor => (
                <div className='sponsor_item' key={sponsor.id}>
                    <img src={sponsor.img} alt="sponsot_img" className='sponsor_img'/>
                </div>
            ))}
        </div>
    )
}

export default Sponsors