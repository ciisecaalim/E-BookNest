import { useEffect, useState } from "react";
import books from "../Components/booknesData";
import axios from "axios";
import ProductList from "../Components/product";

function Shop() {
    const [search, setSearch] = useState("");
    const [selectcatecory, setSelectcatecory] = useState("");

    const filterDate = books.filter((xog) => {
        const searchData = xog.title.toLowerCase().includes(search.toLowerCase());
        const machCatecory = selectcatecory ? xog.category === selectcatecory : true;
        return searchData && machCatecory;
    });

    return (
        <div className="px-2 sm:px-6 md:px-12 lg:px-20 mt-28">
            <div className=" flex-col md:flex-row md:items-center p-4 sm:p-8 mt-6 sm:mt-10 gap-4">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full   h-12 outline-none border-2   pl-4 rounded-lg mb-2 md:mb-0 transition duration-900 ease-in-out transform hover:scale-105"
                    type="search"
                    placeholder="Search product"
                />

                <div className="flex flex-wrap gap-10 text-white   sm:text-lg md:text-xl ml-0 md:ml-[2%] font-semibold bg-blue-900 rounded-lg px-10 py-2  text-4xl md:mt-10 md:mb-12 ">
                    {["", "Literature & Fiction", "Personal Growth", "Business & Finance", "Society & Knowledge", "Psychology & Philosophy"].map((category, idx) => (
                        <label className="flex items-center gap-1" key={idx}>
                            <input
                                type="radio"
                                name="category"
                                value={category}
                                onChange={() => setSelectcatecory(category)}
                            />
                            {category || "All"}
                        </label>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10  ">
                {filterDate.map((item, idx) => (
                    <div 
                        key={item.id || idx} 
                        className="transform transition duration-500  animate-fade-in  p-4 rounded-lg "
                    >
                        <ProductList product={item} />
                    </div>
                ))}
            </div>

            <div className="mb-48"></div>
        </div>
    );
}

export default Shop;