import React from "react";
import "../SearchProducts.css"
import {Link} from "react-router-dom";

const SearchBar = ({searchArray}) => {
    return (
        <div className='search_bar'>
            {searchArray && searchArray.map((item, index) => (
                <div className='search_item' key={index}>
                    <Link to={item.link}>
                        {item.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default SearchBar