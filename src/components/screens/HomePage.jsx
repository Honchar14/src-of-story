import React from "react";
import Promo from "./promo/Promo.jsx";
import Categories from "./categories/Categories.jsx";
import Products from "./products/Products.jsx";
import Brand from "./brand/Brand.jsx";
import Sponsor from "./sponsored/Sponsor.jsx";
import News from "./News/News.jsx";

const HomePage =() => {
    return (
        <>
            <Promo />
            <Categories />
            <Products />
            <Brand />
            <Sponsor />
            <News />
        </>
    )
}

export default HomePage