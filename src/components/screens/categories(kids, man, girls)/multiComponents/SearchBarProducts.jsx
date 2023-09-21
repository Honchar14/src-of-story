import React from "react";
import "../../../../assets/ui/SearchProducts.css"
import {Link} from "react-router-dom";

const SearchBarProducts = ({searchArr, blogSearchArr}) => {
    return (
        <div className='search_bar_products'>
            {searchArr && searchArr.map((item, index) => (
                <div className='search_product' key={index}>
                    <Link className='search_product__item' to={item.link}>
                        {item.title}
                    </Link>
                </div>
            ))}
            {blogSearchArr && blogSearchArr.map((item, index) => (
                <div className='search_product' key={index}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}
export default SearchBarProducts