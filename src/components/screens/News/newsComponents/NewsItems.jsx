import React from "react";
import "../News.css"
import "../newsData.js"
import {newsData} from "../../componentsData.js";
import ButtonNews from "../../../../assets/ui/ButtonNews.jsx";


const formatDate = (dateString) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString('en-US', options);
};
const NewsItems = () => {
    return (
        <div className='news_item'>
            {newsData.map(news => (
                <div className='item' key={news.id}>
                    <div className='news_img' style={{backgroundImage: `url(${news.img})`}}></div>
                    <p className='news_data'>{formatDate(news.data)}</p>
                    <h3 className='news_title'>{news.title}</h3>
                    <ButtonNews>Read more</ButtonNews>
                </div>
            ))}
        </div>
    )
}

export default NewsItems