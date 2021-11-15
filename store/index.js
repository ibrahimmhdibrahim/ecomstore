import {createSlice, configureStore} from "@reduxjs/toolkit";

let initialState = {items: [], cartTotal: 0};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload.item);
        },
        removeFromCart(state) {
        },
    }
});

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export const cartActions = cartSlice.actions;

export default store;