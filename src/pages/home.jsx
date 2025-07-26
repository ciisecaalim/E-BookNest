import React from 'react';
import Footer from "../Components/footer"
import Header from "../Components/header"

function Home() {
    return (
        <div>
         
            <div className="bg-white text-gray-800">
               {/* Hero Section */}
<section className="bg-blue-900 text-white py-20 px-6 md:px-16 w-full mt-20 min-h-[750px] overflow-hidden">

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 mt-10">

    

    {/* Left Content: button, paragraph, then heading */}
    <div className="flex flex-col justify-between gap-6 opacity-0 -translate-x-10 animate-fadeInbt">

       {/* Heading at the Bottom */}
      <h1 className="text-5xl font-bold leading-tight transition-transform duration-900 ease-in-out hover:scale-1105">
        Welcome to <span className="text-yellow-400">📚 Booknest</span>
      </h1>

      
      {/* Paragraph in the Middle */}
      <p className="text-lg text-gray-200 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105">
        Kusoo dhawoow maktabadda | Af-Soomaaliga. Waxaad halakan ka heli kartaa buugaag, qoraallo, iyo qormooyin ku qoran af-Soomaaliga. Fadlan la soco boggaan si aad u heshid sheekooyin, taariikh iyo aqoon guud oo ku saabsan ganacsiga, diinta, caafimaadka iyo wixi la mid ah…
      </p>

      
      
      {/* Button on Top */}
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
        className="w-full max-w-md rounded-lg shadow-2lg shadow-white transition-transform duration-300 ease-in-out hover:scale-105"
      />
    </div>
  </div>
</section>

                {/* About Section */}
                <section className="py-16 px-6 md:px-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">About Booknest</h2>
                        <p className="text-gray-700 text-lg">

                          Fahamka noocyada buuggu wuxuu noqon karaa jahawareer. Iyada oo qaybo badan oo hareeraha sabbaynaya, sidee loo heli karaa dhab ahaan waxa ay raadinayaan? Erayada fudud, nooca buuggu waa qayb ka mid ah suugaanta wadaagta mawduucyo gaar ah ama qaab-dhismeed. Ogaanshaha waxyaabaha lagama maarmaanka u ah noocyadan ayaa fududeynaya inaad doorato buugga saxda ah iyadoo loo eegayo dareenkaaga ama xiisahaaga.
                        </p>

                    </div>
                </section>

           

      <section className="bg-gray-50 py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4"> 📖 Book Categories</h2>
        <p className="text-gray-500 mb-10">
          Explore a variety of genres and book types for every reader's interest.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">

          {/* Fiction */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-book text-4xl"></i>
            <p className="mt-4 font-medium text-sm">Fiction</p>
          </div>

          {/* Science */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-flask text-4xl"></i>
            <p className="mt-4 font-medium text-sm">Science</p>
          </div>

          {/* Comics */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-book-open text-4xl"></i>
            <p className="mt-4 font-medium text-sm">Comics</p>
          </div>

          {/* History */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-landmark text-4xl"></i>
            <p className="mt-4 font-medium text-sm">History</p>
          </div>

          {/* Technology */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-laptop-code text-4xl"></i>
            <p className="mt-4 font-medium text-sm">Technology</p>
          </div>

          {/* Biography */}
          <div className="bg-white w-36 p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition">
            <i className="fas fa-user text-4xl"></i>
            <p className="mt-4 font-medium text-sm">Biography</p>
          </div>

        </div>
      </div>
    </section>



                

     <section className="bg-gray-100 py-16 px-4 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">Featured Books</h2>
        <p className="text-gray-500 mb-12">Discover top-rated and trending books. Download or read now!</p>

        <div className="flex flex-wrap gap-6 justify-center">

          {/* Book 1 */}
          <div className="bg-white w-64 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="https://m.media-amazon.com/images/I/71+2-t7M35L._SY522_.jpg" alt="The Power of Habit" className="h-52 w-full object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">The Alchemist</h3>
            <p className="text-sm text-gray-600 mt-1">by Charles Duhigg</p>
            <p className="mt-2 font-bold text-blue-600">$14.99</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">Download</button>
              <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">Read Now</button>
            </div>
          </div>

          {/* Book 2 */}
          <div className="bg-white w-64 p-4 rounded-xl shadow-md hover:shadow-lg transition">
    
            <img src="https://m.media-amazon.com/images/I/81ANaVZk5LL._SY522_.jpg" alt="Atomic Habits" className="h-52 w-full object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Atomic Habits</h3>
            <p className="text-sm text-gray-600 mt-1">by James Clear</p>
            <p className="mt-2 font-bold text-blue-600">$18.99</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">Download</button>
              <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">Read Now</button>
            </div>
          </div>

          {/* Book 3 */}
          <div className="bg-white w-64 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg" alt="Rich Dad Poor Dad" className="h-52  w-full object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Rich Dad Poor Dad</h3>
            <p className="text-sm text-gray-600 mt-1">by Robert Kiyosaki</p>
            <p className="mt-2 font-bold text-blue-600">$12.49</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">Download</button>
              <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">Read Now</button>
            </div>
          </div>

          {/* Book 4 */}
          <div className="bg-white w-64 p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <img src="https://m.media-amazon.com/images/I/61IxJuRI39L._AC_UY327_FMwebp_QL65_.jpg" alt="The Alchemist" className="h-52 w-full object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">Think and Grow Rich</h3>
            <p className="text-sm text-gray-600 mt-1">by Paulo Coelho</p>
            <p className="mt-2 font-bold text-blue-600">$10.99</p>
            <div className="mt-4 flex gap-2">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">Download</button>
              <button className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">Read Now</button>
            </div>
          </div>

  

      

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