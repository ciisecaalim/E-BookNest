import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/reducer/Cart";

function CartPage() {
  const cartItem = useSelector((e) => e.cart.cartItem);


  const dispach = useDispatch()

  const handleRemoveItem = (item) => {
    dispach(removeCart(item))
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

          <div className="hidden md:flex justify-between text-gray-600 font-medium border-b pb-3 mb-4">
            <span>PRODUCT DETAILS</span>
            <span className="pl-56">QUANTITY</span>
            <span >PRICE</span>
            <span>TOTAL</span>
          </div>

          {cartItem.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between items-center py-4 border-b"
            >
              {/* Product Details */}
              <div className="flex items-center gap-4 w-full md:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <h4 className="font-medium text-lg">{item.title}</h4>
                  <p className="text-sm text-purple-600">{item.category}</p>
                  <button onClick={() => handleRemoveItem(index)} className="text-red-500 text-sm mt-1">Remove</button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-4 md:mt-0 "><span className="bg-slate-100 p-2 pt-2 text-3xl rounded-lg">-</span><span  className="p-10 pt-2 text-3xl">1</span><span  className="bg-slate-100 p-2 pt-2 text-3xl rounded-lg">+</span> </div>

              {/* Price */}
              <div className="mt-4 md:mt-0 text-gray-700">
                £{item.price.toFixed(2)}
              </div>

              {/* Total (just duplicate of price, no calc) */}
              <div className="mt-4 md:mt-0 text-gray-700">
                £{item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary UI only (no logic) */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6">
          <h3 className="text-xl font-semibold mb-4 justify-stretch">Order Summary</h3>

          <div className="flex justify-between mb-2 text-gray-700">
            <span>ITEMS</span>
            <span>--</span>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">SHIPPING</label>
            <select className="w-full border px-3 py-2 mt-1">
              <option>Choose delivery option</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">PROMO CODE</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="Enter your code"
                className="border px-3 py-2 flex-1"
              />
              <button className="bg-red-400 text-white px-4">APPLY</button>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-gray-800 border-t pt-3 mb-6">
            <span>TOTAL COST</span>
            <span>--</span>
          </div>

          <button className="w-full bg-purple-600 text-white py-3 rounded shadow hover:bg-purple-700">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;