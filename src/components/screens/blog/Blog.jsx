import React, { useState } from "react";
import "./Blog.css";
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import ButtonNews from "../../../assets/ui/ButtonNews.jsx";
import Search from "../../../assets/ui/Search.jsx";
import { blogData } from "../componentsData.js"

const Blog = () => {
    const [blog, setBlog] = useState(blogData);
    const [copyBlog, setCopyBlog] = useState(blogData);

    const blogPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * blogPerPage;
    const endIndex = startIndex + blogPerPage;

    const blogToDisplay = blog.slice(startIndex, endIndex);
    const totalPages = Math.ceil(blog.length / blogPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


    const useDebounce = (fn, ms) => {
        let timeOut;
        return function () {
            const fnCall = () => {fn.apply(this, arguments)}

            clearTimeout(timeOut)

            timeOut = setTimeout(fnCall, ms)
        }
    }

    const onSearchUpdate = function (searchQuery) {
        if (searchQuery === "") {
            setBlog(copyBlog);
        } else {
            const filterBlog = copyBlog.filter((blog) =>
                blog.title.startsWith(searchQuery)
            );
            setBlog(filterBlog);
        }
        setCurrentPage(1);
    };

    return (
        <section className="blog">
            <Banner>
                <h2>Latest News</h2>
            </Banner>
            <div className="container">
                <div className="blog_header">
                    <div className="blog_title">Blog</div>
                    <Search onChange={useDebounce(onSearchUpdate, 700)}></Search>
                </div>

                <div className="blog_block">
                    {blogToDisplay.map((item) => (
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
                        disabled={currentPage === 1}
                    >
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
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;