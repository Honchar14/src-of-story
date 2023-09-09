import React from "react";
import "./ButtonProducts.css"
import PropTypes from "prop-types";

const ButtonProducts = ({ className, children, onClick, disabled }) => {
    return (
        <button className={`button_products ${className}`} onClick={onClick} disabled={disabled}>{children}</button>
    )
}

ButtonProducts.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default ButtonProducts