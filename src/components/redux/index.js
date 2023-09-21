import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer.js"
import productReducer from "./products/reducer.js"
import blogReducer from "./blog/reducer.js"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        blog: blogReducer,
    },
});