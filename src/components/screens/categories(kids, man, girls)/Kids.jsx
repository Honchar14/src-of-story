import React, {useState} from "react";
import AllCategoriesProducts from "./AllCategoriesProducts.js";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import "./GirlsMansKids.css"
import Banner from "./multiComponents/Banner.jsx";
import Search from "../../../assets/ui/Search.jsx";
import {Link} from "react-router-dom";

const Kids = () => {
    const [products, setProducts] = useState(AllCategoriesProducts);
    const [copyProducts, setCopyProducts] = useState(AllCategoriesProducts);

    const productsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const productsToDisplay = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const totalProducts = products.length;

    const onSearchUpdate = function (searchQuery) {
        if (searchQuery === "") {
            setProducts(copyProducts);
        } else {
            const filterProducts = copyProducts.filter((product) =>
                product.title.startsWith(searchQuery)
            );
            setProducts(filterProducts);
        }
        setCurrentPage(1);
    };

    const useDebounce = (fn, ms) => {
        let timeOut;
        return function () {
            const fnCall = () => {fn.apply(this, arguments)}

            clearTimeout(timeOut)

            timeOut = setTimeout(fnCall, ms)
        }
    }

    return (
        <section className="kids">
            <Banner>
                <h2>For kid's</h2>
            </Banner>
            <div className="container">
                <div className="mans_products_block">
                    <div className="mans_products_header">
                        <div className="products_header_title">
                            <h2>Products</h2>
                            <p>{totalProducts} Products</p>
                        </div>
                        <Search onChange={useDebounce(onSearchUpdate, 700)}></Search>
                    </div>
                    <div className="mans_products">
                        {productsToDisplay.map((product) => (
                            <div className="mans_product" key={product.id}>
                                <img src={product.img} alt="product_img" className="product_img" />
                                <p className="product_brand">{product.brand}</p>
                                <h2 className="product_title">{product.title}</h2>
                                <p className="product_price">{product.price}$</p>
                                <Link to={`/aboutProduct/${product.id}` } className={'product_btn'}>
                                    <ButtonProducts>Read more</ButtonProducts>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            {"<"}
                        </button>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <div className="pagination_button_block" key={i}>
                                <button
                                    onClick={() => handlePageChange(i + 1)}
                                    className={currentPage === i + 1 ? "active" : ""}
                                >
                                    {i + 1}
                                </button>
                            </div>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Kids