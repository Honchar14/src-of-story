import React from "react";
import "./ButtonMain.css"
import PropTypes from "prop-types";

const ButtonMain = ({className, onClick, children}) => {
    return (
        <button className={`slider_content__button ${className}`} onClick={onClick}>{children}</button>
    )
}

ButtonMain.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonMain