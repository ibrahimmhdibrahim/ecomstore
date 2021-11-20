import {createSlice, configureStore} from "@reduxjs/toolkit";
import {act} from "react-dom/test-utils";

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
                checkItem.quantity = checkItem.quantity + action.payload.item.count;
                if (checkItem.quantity <=0 ) {
                    state.items = state.items.filter(item => item.id !== action.payload.item.id);
                }
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.item.id);
        },
        clearCart(state) {
            state = initialState;
        }
    }
});

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export const cartActions = cartSlice.actions;

export default store;