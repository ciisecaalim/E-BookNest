import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: "cart",


    initialState: {
        cartItem: [],
        totalPrice: 0
    },

    reducers: {

    addToCart: (state, action) => {
        const newData = action.payload //payload = data
        state.cartItem.push(newData)
    },

    removeCart: (state, action) => {
        const removeItem = action.payload
        state.cartItem =state.cartItem.filter((_, index) => index != removeItem)
    },

     caculatePrice: ((state) => {
        let total = 0
        state.cartItem.forEach((item) => {
            total += item.price
        })
        state.totalPrice=total




    })


    
}
})



export const {addToCart, removeCart, caculatePrice} = CartSlice.actions

export default CartSlice.reducer