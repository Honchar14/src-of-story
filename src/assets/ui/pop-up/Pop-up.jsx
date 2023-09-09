import React from "react";
import "./Pop-up.css"

const PopUp = ({active, setActive, children}) => {

    if (!active) return null;

    const closeModal = () => {
        setActive(false);
    };

    return (
        <div className="modal">
            <div className="modal_background" >
                <button className="close_button" onClick={closeModal}>
                    X
                </button>
                {children}
            </div>
        </div>
    )
}

export default PopUp