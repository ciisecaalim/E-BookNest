import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { caculatePrice, removeCart } from "../redux/reducer/Cart";

export default function Cart() {
  const cartItem = useSelector((e) => e.cart.cartItem);
  const totalPrice = useSelector((e) => e.cart.totalPrice);


  const dispatch = useDispatch()


  const handleRemove=(e)=>{
    dispatch(removeCart(e))
    dispatch(caculatePrice())
  }


  useEffect (() => {
    dispatch(caculatePrice())
  })
 









  // console.log(cartItem)

  return (
   <div className="mt-24">

     <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row p-6 mt-16">
   
      <div className="flex-1 bg-white p-6 rounded-md shadow mr-4">
        <h2 className="text-3xl font-semibold mb-8">Shopping Cart</h2>


      <div className="hidden md:flex items-center border-b pb-3 mb-4 font-bold ">
    <span className="w-44 ml-4">PRODUCT DETAILS</span>
    <span className="flex-1"> </span>
    <span className="w-32 text-center">QUANTITY</span>
    <span className="w-24 text-right">PRICE</span>
    <span className="w-24 text-right">TOTAL</span>
  </div>

       
              {cartItem.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cartItem.map((item,index) => (
            <div className="flex items-center border-b py-4">
         
            <img src={item.image} alt={item.title}className="w-20 h-20 object-contain mr-4"/>
           <div className="flex-1">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <button onClick={()=>handleRemove(index)} className="text-red-500 text-sm ">Remove</button>
          </div>
          <div className="flex items-center gap-2 ">
            <button  className="px-2 py-1 bg-gray-200 rounded">−</button>
            <span>0</span>
            <button  className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <div className="w-24 text-right">
    
            <p className="font-semibold">${item.price}</p>
          </div>
            <div className="w-24 text-right">
            <p className="font-semibold">${item.price}</p>
          </div>
            </div>

          ))
        )}
   
  
      </div>

      {/* Right: Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-md shadow">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Items ({cartItem.length})</span>
          <span></span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total Cost</span>
       <span>${totalPrice.toFixed(2)}</span>
          
         
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700">
          CHECKOUT
        </button>
      </div>
    </div>
   </div>
  );
}