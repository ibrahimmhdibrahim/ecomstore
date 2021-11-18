import {createSlice, configureStore} from "@reduxjs/toolkit";

let initialState = {items: [], cartTotal: 0};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const checkItem = state.items.find(item => item.id === action.payload.item.id);
            if (!checkItem) {
                state.items.push(action.payload.item);
            }
            else {
                checkItem.quantity += action.payload.item.quantity;
            }
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