import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: "cart",


    initialState: {
        cartItem: [],
    },

    reducers: {

    addToCart: (state, action) => {
        const newData = action.payload //payload = data
        state.cartItem.push(newData)
    },

    removeCart: (state, action) => {
        const removeItem = action.payload
        state.cartItem =state.cartItem.filter((_, index) => index != removeItem)
    }
}
})



export const {addToCart, removeCart} = CartSlice.actions

export default CartSlice.reducer