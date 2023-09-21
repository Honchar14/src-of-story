import React from "react";
import "./GirlsMansKids.css"
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import Banner from "./multiComponents/Banner.jsx";

import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setProducts, setCurrentPage, setSearchQuery, startIndex, endIndex, totalPages} from "../../redux/products/reducer.js";
import {useSelector} from "react-redux";
import SearchProducts from "../../../assets/ui/SearchProducts.jsx";


const Mans = () => {
    const dispatch = useDispatch();
    const {currentProductsData, currentPage, searchQuery, productsData} = useSelector((state) => state.products);
    const totalPagesLocal = useSelector(totalPages);
    const startIndexLocal = useSelector(startIndex);
    const endIndexLocal = useSelector(endIndex);


    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
    };

    const totalProducts = currentProductsData.length;

    const onSearchUpdate = function (searchQuery) {
        dispatch(setSearchQuery(searchQuery))
    };


    const useDebounce = (fn, ms) => {
        let timeOut;
        return function () {
            const fnCall = () => {
                fn.apply(this, arguments)
            }

            clearTimeout(timeOut)

            timeOut = setTimeout(fnCall, ms)
        }
    }

    return (
        <section className="mans">
            <Banner>
                <h2>For men</h2>
            </Banner>
            <div className="container">
                <div className="mans_products_block">
                    <div className="mans_products_header">
                        <div className="products_header_title">
                            <h2>Products</h2>
                            <p>{totalProducts} Products</p>
                        </div>
                        <SearchProducts onChange={useDebounce(onSearchUpdate, 700)}></SearchProducts>
                    </div>
                    <div className="mans_products">
                        {currentProductsData.slice(startIndexLocal, endIndexLocal).map((product) => (
                            <div className="mans_product" key={product.id}>
                                <img src={product.img} alt="product_img" className="product_img"/>
                                <p className="product_brand">{product.brand}</p>
                                <h2 className="product_title">{product.title}</h2>
                                <p className="product_price">{product.price}$</p>
                                <Link to={`/aboutProduct/${product.id}`} className={'product_btn'}>
                                    <ButtonProducts>Read more</ButtonProducts>
                                </Link>

                            </div>
                        ))}
                    </div>
                    <div className="pagination">
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            {"<"}
                        </button>
                        {Array.from({ length: Number(totalPagesLocal)}).map((_, i) => (
                            <div className="pagination_button_block" key={i}>
                                <button
                                    onClick={() => handlePageChange(i + 1)}
                                    className={currentPage === i + 1 ? "active" : ""}
                                >
                                    {i + 1}
                                </button>
                            </div>
                        ))}
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPagesLocal}>
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mans