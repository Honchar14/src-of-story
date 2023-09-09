import React from "react";
import "./ButtonNews.css"
import PropTypes from "prop-types";


const ButtonNews = ({className, children}) => {
    return (
        <button className={`'news_btn' ${className}`}>{children}<span className='arrow'>&rarr;</span></button>
    )
}

ButtonNews.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonNews