import React from 'react';
import Footer from "../Components/footer";
import Header from "../Components/header";
import Swal from 'sweetalert2';

function Home() {
    const handleDownload = (bookTitle) => {
        // SweetAlert confirmation
        Swal.fire({
            icon: 'success',
            title: 'Download Started',
            text: `You are downloading "${bookTitle}".`,
            confirmButtonText: 'Okay',
            background: '#f7f7f7',
            iconColor: '#4CAF50',
            confirmButtonColor: '#4CAF50',
        });
    };

    return (
        <div className="overflow-hidden">
            <Header />

            <div className="bg-white text-gray-800 overflow-hidden">
                {/* Hero Section */}
                <section className="bg-blue-900 text-white py-20 px-6 md:px-16 w-full mt-36 min-h-[750px] overflow-hidden">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 mt-10">
                        {/* Left Content */}
                        <div className="flex flex-col justify-between gap-6 opacity-0 -translate-x-10 animate-fadeInbt">
                            <h1 className="text-5xl font-bold leading-tight transition-transform duration-900 ease-in-out hover:scale-1105">
                                Welcome to <span className="text-yellow-400">📚 Booknest</span>
                            </h1>
                            <p className="text-lg text-gray-200 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105">
                                Kusoo dhawoow maktabadda | Af-Soomaaliga. Waxaad halakan ka heli kartaa buugaag, qoraallo, iyo qormooyin ku qoran af-Soomaaliga. Fadlan la soco boggaan si aad u heshid sheekooyin, taariikh iyo aqoon guud oo ku saabsan ganacsiga, diinta, caafimaadka iyo wixi la mid ah…
                            </p>
                            <div>
                                <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                                    Explore Library
                                </button>
                            </div>
                        </div>
                        {/* Right Side: Image */}
                        <div className="flex justify-center opacity-0 translate-x-10 animate-fadeInimg">
                            <img
                                src="https://i.pinimg.com/736x/64/92/ea/6492ea73ef1d94c2748a4267b828170e.jpg"
                                alt="Reading books"
                                className="w-full relative max-w-md rounded-lg shadow-2lg shadow-white transition-transform duration-300 ease-in-out hover:scale-105"
                            />
                        </div>


{/* box */}
 
<div className="overflow-hidden"> 
                   
<div className=" w-36 h-20 bg-white absolute top-[400px]  rounded-lg ml-[660px] text-green-600 text-center text-2xl p-1 pt-2 animate-pulse animate-box overflow-hidden">
 
<i class="fa-solid fa-address-book"></i>
<h1 className="text-sm mt-2 overflow-hidden">address-book</h1>
</div>
  
 

{/* 4 */}
<div className="w-36 h-20 overflow-hidden bg-white absolute top-[400px] text-green-600  rounded-lg ml-[1140px] text-center text-2xl p-1 pt-2 animate-pulse animate-box2 ">

<i class="fa-solid fa-address-book"></i>
<h1 className="text-sm mt-2">address-book</h1>
</div>



{/* box4 */}
                        
<div className="w-24 h-28 bg-white overflow-hidden absolute top-[680px] text-green-600  rounded-lg ml-[920px] text-center text-2xl p-1 pt-4 animate-bounce animate-box3">

<i class="fa-solid fa-address-book"></i>
<h1 className="text-sm mt-2">address-book</h1>
</div>


</div>
 





                    </div>
                </section>

 
 







                {/* About Section */}
                <section className="py-16 px-6 md:px-16 bg-gray-50 md:mt-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Booknest</h2>
                        <p className="text-gray-700 text-lg">
                            Fahamka noocyada buuggu wuxuu noqon karaa jahawareer. Iyada oo qaybo badan oo hareeraha sabbaynaya, sidee loo heli karaa dhab ahaan waxa ay raadinayaan? Erayada fudud, nooca buuggu waa qayb ka mid ah suugaanta wadaagta mawduucyo gaar ah ama qaab-dhismeed. Ogaanshaha waxyaabaha lagama maarmaanka u ah noocyadan ayaa fududeynaya inaad doorato buugga saxda ah iyadoo loo eegayo dareenkaaga ama xiisahaaga.
                        </p>
                    </div>
                </section>

                {/* Book Categories */}
                <section className="bg-gray-50 py-8 px-4 text-center">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-black mb-4 p-3"> 📖 Book Categories</h2>
                        <p className="text-gray-500 mb-10">
                            Explore a variety of genres and book types for every reader's interest.
                        </p>
                        <div className="flex flex-wrap gap-20 justify-center mb-36 animate-pulse">
                            {/* Categories */}
                            
                            {['Fiction', 'Science', 'Comics', 'History', 'Technology', 'Biography'].map((category) => (
                                <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition " key={category}>
                                     <a href="/shop" className='flex'>  <i className={`fas fa-book text-4xl`}></i></a>
                                    <p className="mt-4 font-medium text-sm">{category}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Books */}
                <section className="bg-gray-100 py-16 px-4 text-center">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800 animate-fadeInbt">Featured Books</h2>
                        <p className="text-gray-500 mb-12">Discover top-rated and trending books. Download or read now!</p>
                        <div className="flex flex-wrap gap-20 justify-center z-50">
                            {/* Book Cards */}
                            {[
                                { title: "The Alchemist", author: "by Paulo Coelho", price: "$14.99", image: "https://m.media-amazon.com/images/I/71+2-t7M35L._SY522_.jpg" },
                                { title: "Atomic Habits", author: "by James Clear", price: "$18.99", image: "https://m.media-amazon.com/images/I/81ANaVZk5LL._SY522_.jpg" },
                                { title: "Rich Dad Poor Dad", author: "by Robert Kiyosaki", price: "$12.49", image: "https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg" },
                                { title: "Think and Grow Rich", author: "by Napoleon Hill", price: "$10.99", image: "https://m.media-amazon.com/images/I/61IxJuRI39L._AC_UY327_FMwebp_QL65_.jpg" },
                            ].map((book, index) => (
                                <div className="bg-white w-64 p-4 rounded-xl  hover:shadow-lg transition shadow-black shadow-lg" key={index}>
                                    <img src={book.image} alt={book.title} className="h-52 w-full object-cover rounded-md" />
                                    <h3 className="mt-4 text-lg font-semibold text-gray-800">{book.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                                    <p className="mt-2 font-bold text-blue-600">{book.price}</p>
                                    <div className="mt-4 flex gap-2">
                                        <button onClick={() => handleDownload(book.title)} className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition mr-2">Download</button>
                                       <a href="https://en.wikipedia.org/wiki/The_Alchemist_(novel)">   <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition ml-4">Read Now</button></a>
                                      
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 px-6 md:px-16 bg-white">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-12">🌟 Why Choose Booknest?</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="text-center px-4">
                                <i className="fas fa-book-reader text-4xl text-yellow-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Thousands of Books</h3>
                                <p className="text-gray-600">Access a massive collection of digital books across all genres — always growing.</p>
                            </div>
                            <div className="text-center px-4">
                                <i className="fas fa-mobile-alt text-4xl text-green-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Read Anywhere</h3>
                                <p className="text-gray-600">Read your books on mobile, tablet, or desktop with our cross-platform support.</p>
                            </div>
                            <div className="text-center px-4">
                                <i className="fas fa-tags text-4xl text-red-500 mb-4"></i>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">Affordable Prices</h3>
                                <p className="text-gray-600">Get high-quality books without breaking the bank. Free & discounted titles available!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-blue-50 py-20 px-6 md:px-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-12">💬 What Readers Say</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { quote: "“Booknest has reignited my love for reading! I can read anytime on my phone.”", name: "Amina S." },
                                { quote: "“The selection is amazing, and I love the clean, easy-to-use interface.”", name: "Yusuf M." },
                                { quote: "“I save so much money on books now, and the quality is just as good!”", name: "Leila H." },
                            ].map((testimonial, index) => (
                                <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition" key={index}>
                                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                                    <h4 className="font-semibold text-blue-800">— {testimonial.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
 
        </div>
    );
}

export default Home;