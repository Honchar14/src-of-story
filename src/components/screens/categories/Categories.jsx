import React from "react";
import "./Categories.css"
import Category from "./categoriesComponents/Category.jsx";

const Categories = () => {

    return (
        <section className='categories'>
            <div className='container'>
                <div className='categories_section'>
                    <div className='categories_title'>
                        <h2 className='title'>Shop by <span className='red'>categories</span></h2>
                        <p className='subtitle'>Pick a category you need</p>
                    </div>
                    <div className='categories_block'>
                        <Category />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories