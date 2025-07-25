//import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

function Header() {

    const cartItem  = useSelector((e) => e.cart.cartItem)


    return (
 
         <div className="relative sm:flex   bg-white  shadow-lg text-2xl font-semibold ">
    <div className="flex justify-between  sm:px-20 px-5 py-5  ">
    <h1 className="text-4xl text-blue-900 whitespace-nowrap -ml-2 hover:scale-1105 cursor-pointer hover: transition-transform duration-500">📚 Booknest</h1>
     <i className="fa-solid fa-bars sm:hidden text-4xl text-gray-800 cursor-pointer"></i>
    </div>
            <ul className="flex gap-10 pt-1 text-3xl  mt-5 ml-80 ">
                <NavLink to="/" className="hover:text-blue-800 sm:block hidden hover:underline hover:scale-1105">
                    <li>Home</li>
                </NavLink>
                 <NavLink to="/Shop" className="hover:text-blue-800 sm:block hidden hover:underline">
                    <li>Shop</li>
                </NavLink>



                <NavLink to="/about" className="hover:text-blue-800 sm:block hidden hover:underline">
                    <li>About</li>
                </NavLink>
                <NavLink to="/contact" className="hover:text-blue-800 sm:block hidden hover:underline">
                    <li>Contact</li>
                </NavLink>

                <div> 
                <NavLink to="/login" className="hover:text-blue-800 sm:block hidden absolute top-4 right-48">
                    <li><button className="bg-blue-700 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-medium transition">Login</button></li>
                </NavLink>

                <NavLink to="/login" className="hover:text-blue-800 sm:block hidden">
                  
                 <div className="absolute top-1">
                  
                 </div>
                </NavLink>

                 <NavLink to="/cart"> <i className="fa-solid fa-book  absolute  right-24 duration-500"></i> 
 
 
              
                 <h1 className="absolute top-2 right-14 duration-500">({cartItem.length})</h1></NavLink>
  
</div>
            </ul>

        
    
        </div>

    
    );
}

export default Header