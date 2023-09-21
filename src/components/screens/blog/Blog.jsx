import React from "react";
import "./Blog.css";
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import ButtonNews from "../../../assets/ui/ButtonNews.jsx";
import {useDispatch, useSelector} from "react-redux";
import {endIndex, setCurrentPage, setSearchQuery, startIndex, totalPages} from "../../redux/blog/reducer.js";
import SearchProducts from "../../../assets/ui/SearchProducts.jsx";

const Blog = () => {
    const dispatch = useDispatch();
    const {currentBlogData, currentPage} = useSelector((state) => state.blog);
    const totalPagesLocal = useSelector(totalPages);
    const startIndexLocal = useSelector(startIndex);
    const endIndexLocal = useSelector(endIndex);

    console.log(currentBlogData)


    const handlePageChange = (newPage) => {
        dispatch(setCurrentPage(newPage));
    };


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
        <section className="blog">
            <Banner>
                <h2>Latest News</h2>
            </Banner>
            <div className="container">
                <div className="blog_header">
                    <div className="blog_title">Blog</div>
                    <SearchProducts onChange={useDebounce(onSearchUpdate, 700)}></SearchProducts>
                </div>

                <div className="blog_block">
                    {currentBlogData.slice(startIndexLocal,endIndexLocal).map((item) => (
                        <div className="blog_item" key={item.id}>
                            <img className="blog_img" src={item.img} alt="blog-img" />
                            <div className="blog_content">
                                <p className="blog_data">{item.data}</p>
                                <h2 className="blog_name">{item.title}</h2>
                                <p className="blog_subtitle">{item.subtitle}</p>
                                <ButtonNews className="news_btn">Read more</ButtonNews>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}>{"<"}</button>
                    {Array.from({ length: Number(totalPagesLocal)}).map((_, i) => (
                        <div className="pagination_button_block" key={i}>
                            <button
                                onClick={() => handlePageChange(i + 1)}
                                className={currentPage === i + 1 ? "active" : ""}>{i + 1}</button>
                        </div>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}>{">"}</button>
                </div>
            </div>
        </section>
    );
};

export default Blog;