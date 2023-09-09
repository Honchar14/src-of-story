import React from "react";
import "./News.css"
import NewsItems from "./newsComponents/NewsItems.jsx";

const News = () => {
    return (
        <section className='news'>
            <div className='container'>
                <div className='news_block'>
                    <div className='news_head'>
                        <h2>Latest <span className='red'>news</span></h2>
                        <p>Ahead of the 2023 FIBA Basketball World Cup, Nike is opening an outdoor basketball court.</p>
                    </div>
                    <NewsItems/>
                </div>
            </div>
        </section>
    )
}

export default News