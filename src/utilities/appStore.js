import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const appStore = configureStore({
    reducer: {
        // add reducers here
        cart: cartReducer,
    }
});

export default appStore;