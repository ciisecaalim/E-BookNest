import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
const cartItem = useSelector((e)=> e.cart.cartItem)
  const [Isopen, SetIopen] = useState(false);

  const handleIsOpen = () => {
    if (Isopen === false) {
      SetIopen(true);
    } else {
      SetIopen(false);
    }
  };

  return (
    <div className="fixed top-0 w-full   sm:flex   bg-white shadow-lg text-2xl font-semibold ">
    <div className="flex justify-between  sm:px-20 px-5 py-6  ">
    <h1 className="text-4xl text-blue-900 whitespace-nowrap -ml-2">📚 Booknest</h1>
     <i onClick={handleIsOpen}className="fa-solid fa-bars sm:hidden text-4xl text-gray-800 cursor-pointer"></i>
    </div>

    
      <div style={{ display: Isopen === true ? "block" : "" }}className="sm:flex justify-between gap-10 items-center w-full text-center sm:text-left sm:static absolute z-40 bg-blue-800  sm:bg-transparent sm:ml-28 text-white sm:text-gray-800 px-6 sm:px-28 py-6 sm:py-0 space-y-6 sm:space-y-0 hidden">
        <ul className="sm:flex justify-between gap-10 text-base/9  sm:text-lg  md:text-xl  font-semibold  space-y-10  sm:space-y-0 ">
          <Link to="/"><li className="hover:text-yellow-300 sm:hover:text-blue-600 cursor-pointer">HOME</li></Link>
          <Link to="/about"><li className="hover:text-yellow-300 sm:hover:text-blue-600 cursor-pointer">ABOUT</li></Link>
          <Link to="/shop"><li className="hover:text-yellow-300  sm:hover:text-blue-600 cursor-pointer">BOOK</li></Link>
          <Link to="/contact"><li className="hover:text-yellow-300 sm:hover:text-blue-600 cursor-pointer">CONTACT</li></Link>
        </ul>

        <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 sm:gap-6">
          <Link to="/login"><button className="bg-blue-700 hover:bg-blue-100 px-6 py-2 rounded-md text-white font-medium transition">Login</button></Link>
          <Link to="/cart"><i className="fa-solid fa-cart-shopping   sm:text-blue-900 text-white hover:text-yellow-300 sm:hover:text-blue-600 cursor-pointer  "><span className=" sm:absolute sm:top-2 ml-2 ">({cartItem.length})</span></i></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
