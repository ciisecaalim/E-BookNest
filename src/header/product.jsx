import { useDispatch } from "react-redux"
import { addToCart } from "../redux/reducer/Cart"

function  ProductList ({product}) {

    const dispach = useDispatch()

    const handleAddToCart = () => {
        dispach(addToCart(product))
    }



    return <div className="w-72 h-[550px] shadow-md shadow-black   border-2 border-black rounded-lg p-4 items-center mt-24 mb-20 ml-10" >

        <img src={product.image} alt="" className="h-[300px]"/>
        <h1 className=" text-blue-600 text-xl w-full  font-bold ml-3">{product.title}</h1>
        <h1 className=" text-yellow-600 text-xl w-full  font-bold ml-14">$ {product.price}</h1>
        <button onClick={handleAddToCart} className="w-full h-10 rounded-lg bg-blue-500 font-bold">Add to cart</button>



    </div>
}
export default ProductList