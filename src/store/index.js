import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";
import productSlice from "./products/product.slice";
import orderSlice from "./order/order.slice";

export const store = configureStore({
    reducer: {
        userSlice:userSlice,
        categoriesSlice:categoriesSlice,
        productsSlice:productsSlice,
        cartSlice:cartSlice,
        productSlice:productSlice,
        orderSlice:orderSlice

    }
})
