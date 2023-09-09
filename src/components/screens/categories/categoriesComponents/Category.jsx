import React from "react";
import {Link} from "react-router-dom";
import {componentsData} from "../../componentsData.js";
import { categoriesData } from "../../componentsData.js"

const Category = () => {

    const totalProducts = componentsData.length;
    return (
        <div className='category_section'>
            {categoriesData.map(category => (
                <Link key={category.id} to={category.link} className='category' style={{backgroundImage: `url(${category.img})`}}>
                    <h2 className='categories_block__title'>{category.title}</h2>
                    <p className='categories_block__subtitle'>{totalProducts} Products</p>
                </Link>
            ))}
        </div>
    )
}

export default Category