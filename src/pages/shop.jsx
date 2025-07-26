import { useEffect, useState } from "react"
import books from "../Components/booknesData"
import axios from "axios"
import ProductList from "../Components/product"

function Shop() {
    // const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const [selectcatecory, setSelectcatecory] = useState("")

    // const handeledata = () => {
    //     axios.get("https://fakestoreapi.com/products").then((res) => {
    //         setData(res.data)
    //     }).catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     handeledata()
    // }, [])

    const filterDate = books.filter((xog) => {
        const searchData = xog.title.toLowerCase().includes(search.toLowerCase())
        const machCatecory = selectcatecory ? xog.category === selectcatecory : true
        return searchData && machCatecory
    })

    return (
        <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-28">
            <div className="flex flex-col md:flex-row md:items-center p-4 sm:p-8 mt-6 sm:mt-10 gap-4">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-52 h-10 outline-none border-2 border-gray-400 pl-4 rounded-lg mb-2 md:mb-0"
                    type="search"
                    placeholder="Search product"
                />
                <div className="flex flex-wrap gap-3 text-black text-base sm:text-lg md:text-xl ml-0 md:ml-3">
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="" onChange={() => setSelectcatecory("")} />All
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="Literature & Fiction" onChange={() => setSelectcatecory("Literature & Fiction")} />Fiction
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="Personal Growth" onChange={() => setSelectcatecory("Personal Growth")} />Personal Growth
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="Business & Finance" onChange={() => setSelectcatecory("Business & Finance")} />Business
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="Society & Knowledge" onChange={() => setSelectcatecory("Society & Knowledge")} />Knowledge
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="category" value="Psychology & Philosophy" onChange={() => setSelectcatecory("Psychology & Philosophy")} />Philosophy
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {filterDate.map((item, idx) => (
                    <ProductList key={item.id || idx} product={item} />
                ))}
            </div>
        </div>
    )
}

export default Shop