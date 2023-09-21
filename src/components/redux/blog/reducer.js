import {createSlice} from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        blogData: [],
        currentBlogData: [],
        currentPage: 1,
        searchQuery: "",
        searchProductResultBlog: [],
        dataPerPage: 3,
        searchBar: false,
    },
    reducers: {

        setBlogData: (state, action) => {
            state.blogData = action.payload;
            state.currentBlogData = action.payload;
        },

        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            if (state.searchQuery === "") {
                state.currentBlogData = [...state.blogData]
            } else {
                const filterProducts = state.blogData.filter((product) =>
                    product.title.startsWith(state.searchQuery)
                );
                state.currentBlogData = [...filterProducts]
            }
            state.currentPage = 1;
        },
        setSearchDropdownBlogQuery: (state, action) => {
            state.searchQuery = action.payload;
            if (state.searchQuery === "") {
                state.searchBar = false
            } else {
                state.searchBar = true
                const filterProducts = state.blogData.filter((product) =>
                    product.title.startsWith(state.searchQuery)
                );
                state.searchProductResultBlog = [...filterProducts.map((item) => {
                    return {
                        'title': item.title,
                        // 'link': `/aboutProduct/${item.id}`
                    }
                })];
            }
        },
    }
});


export const {setBlogData,setCurrentPage,setSearchQuery,setSearchDropdownBlogQuery,} = blogSlice.actions;
export const startIndex = state => (state.blog.currentPage - 1) * state.blog.dataPerPage;
export const endIndex = state => startIndex(state) + state.blog.dataPerPage;

export const totalPages = function (state) {
    return Math.ceil(state.blog.currentBlogData.length / state.blog.dataPerPage)
};
export default blogSlice.reducer
