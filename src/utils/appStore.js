import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// this is the redux main store and here we will configure it
const appStore = configureStore({
    // inside this we will add all the slices for store
reducer: {
    cart: cartReducer,
}

});

export default appStore;