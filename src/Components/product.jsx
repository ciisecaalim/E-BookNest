import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/Cart"

function  ProductList ({product}) {

    const dispach = useDispatch()

    const handleAddToCart = () => {
        dispach(addToCart(product))
    }



    return <div className="bg-white  rounded-lg border-2 border-gray-400 w-60 ml-16 text-center p-8 shadow-lg m-2 ">
   
           <img  src={product.image} alt={product.title} className="w-full  h-64  object-cover "/>
          <h1 className="mt-4 font-bold ">{product.title}</h1>
          <h1 className="text-black font-semibold text-sm">${product.price}</h1>
          <button onClick={handleAddToCart} className="w-full h-10 bg-blue-500 text-2xl text-white rounded-md shadow-md">Add Cart</button> 
          




    </div>
}
export default ProductList