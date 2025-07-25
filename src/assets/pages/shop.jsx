import { useEffect, useState } from "react"
import Header from "../../header/header"
import axios from "axios"
import ProductList from "../../header/product"



function Shop() {

    const [data, setData] = useState([])

    const [search, setSearch] = useState ("")





    

const [selectcatecory, setSelectcatecory] =useState("")
 


 

 



    
    const handeledata = () => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res.data)
        }).catch(error => console.log(error))


    }


    useEffect(() => {
        handeledata()
    },)



const filterDate = data.filter((xog) => {
    const searchData = xog.title.toLowerCase().includes(search.toLowerCase()) // fix typo
    const machCatecory = selectcatecory ? xog.category === selectcatecory : true
    return searchData && machCatecory
})



    return <div>

        <Header />



        <div className="flex justify-center mt-40 mb-10 gap-10 ">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" className="w-60 h-10 text-2xl text-black rounded-lg border-black border-2 pl-2 pb-1" />


            <div className="mt-2 space-x-7">
                <input type="radio" name="catecory" id="" onChange={() => setSelectcatecory("")} />All
                <input type="radio" name="catecory" value="electronics" id=""  onChange={() => setSelectcatecory("electronics")}/>electronics
                <input type="radio" name="catecory" value="jewelery" id="" onChange={() => setSelectcatecory("jewelery")}/>jewelery
                <input type="radio" name="catecory" value="men's clothing" id="" onChange={() => setSelectcatecory("men's clothing")}/>men's clothing
                <input type="radio" name="catecory" value="women's clothing" id="" onChange={() => setSelectcatecory ("women's clothing")}/>women's clothing
            </div>
        </div>

<div className="grid grid-cols-3 gap-10">

        {
            filterDate.map((item) => {

                return <ProductList product={item} />

            })



        }

        </div>



    </div>
}


export default Shop