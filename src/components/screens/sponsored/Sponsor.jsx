import React from "react";
import Sponsors from "./sponsoredComponents/Sponsors.jsx";
import "./Sponsor.css"

const Sponsor = () => {
    return (
        <section className='sponsor'>
            <div className='container container_sponsor'>
                <Sponsors/>
                <div className='sponsor_name'>
                </div>
            </div>
        </section>
    )
}

export default Sponsor