import {createSlice, current} from "@reduxjs/toolkit";
import productsData from "../../screens/products/productsData.js";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        productsData: [],
        currentProductsData: [],
        currentPage: 1,
        searchQuery: "",
        searchProductResult: [],
        productsPerPage: 8,
        searchBar: false,
    },
    reducers: {

        setProducts: (state, action) => {
            state.productsData.push(...action.payload)
            state.currentProductsData.push(...action.payload)
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            if (state.searchQuery === "") {
                state.currentProductsData = [...state.productsData]
            } else {
                const filterProducts = productsData.filter((product) =>
                    product.title.startsWith(state.searchQuery)
                );
                state.currentProductsData = [...filterProducts]
            }
            state.currentPage = 1;
        },
        setSearchDropdownQuery: (state, action) => {
            state.searchQuery = action.payload;
            if (state.searchQuery === "") {
                state.searchBar = false
            } else {
                state.searchBar = true
                const filterProducts = state.productsData.filter((product) =>
                    product.title.startsWith(state.searchQuery)
                );
                state.searchProductResult = [...filterProducts.map((item) => {
                    return {
                        'title': item.title,
                        'link': `/aboutProduct/${item.id}`
                    }
                })];
            }
        },
    }
});


export const {setProducts, setCurrentPage, setSearchQuery, setSearchDropdownQuery} = productsSlice.actions;
export const startIndex = state => (state.products.currentPage - 1) * state.products.productsPerPage;
export const endIndex = state => startIndex(state) + state.products.productsPerPage;

export const totalPages = function (state) {
    return Math.ceil(state.products.currentProductsData.length / state.products.productsPerPage)
};
export default productsSlice.reducer
