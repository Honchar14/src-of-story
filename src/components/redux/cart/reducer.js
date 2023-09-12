import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            const { id, props } = action.payload;
            const updatedProps = { ...props, id }; // Update the id property
            state.itemsInCart.push({ ...action.payload, props: updatedProps });
        },
        deleteItemFromCart: (state, action) => {
            const product_props = action.payload;
            state.itemsInCart = state.itemsInCart.filter(product => (product.props.id !== product_props.id || product.props.color !== product_props.color || product.props.size !== product_props.size))
        },
        increaseQuantity: (state, action) => {
            const product_props = action.payload;
            let index = -1;
            for (let i = 0; i < state.itemsInCart.length; i++) {
                let target_product = state.itemsInCart[i];
                if (target_product.props.id === product_props.id && target_product.props.color === product_props.color && target_product.props.size === product_props.size)
                {
                    index = i;
                }
            }
            if (index === -1) {
                return;
            }
            state.itemsInCart[index].props.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const product_props = action.payload;
            let index = -1;
            for (let i = 0; i < state.itemsInCart.length; i++) {
                let target_product = state.itemsInCart[i];
                if (target_product.props.id === product_props.id && target_product.props.color === product_props.color && target_product.props.size === product_props.size)
                {
                    index = i;
                }
            }
            if (index === -1) {
                return;
            }
            if (state.itemsInCart[index].props.quantity < 1) {
                return;
            }
            state.itemsInCart[index].props.quantity -= 1;
        },

    }
});


export const {setItemInCart, deleteItemFromCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer