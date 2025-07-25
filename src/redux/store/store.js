import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../reducer/Cart"

const Store = configureStore ({
    reducer: {
        cart: CartSlice
    }
})

export default Store