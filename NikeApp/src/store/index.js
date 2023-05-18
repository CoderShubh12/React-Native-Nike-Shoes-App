import { configureStore } from "@reduxjs/toolkit";
import { productsSLice } from "./productSlice";

export const store=configureStore({
    reducer:{
        products: productsSLice.reducer,
    }
})