import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
        },
        increaseQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.itemsInCart.find((item) => item.id === productId);
            if (product) {
                product.props.quantity += 1;
                product.props.totalPrice = product.price * product.props.quantity;
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.itemsInCart.find((item) => item.id === productId);
            if (product && product.props.quantity > 1) {
                product.props.quantity -= 1;
                product.props.totalPrice = product.price * product.props.quantity;
            }
        },

    }
});


export const {setItemInCart, deleteItemFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer