import React from 'react';
import Header from "../../header/header";
import Footer from '../../header/footer';

function Home() {
    return (
        <div>
            <Header />
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

                {/* Categories with Icons */}
                <section className="py-16 px-6 md:px-16 bg-white">
                    <div className="max-w-7xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-blue-900">📖 Categories</h2>
                        <p className="text-gray-600 mt-2">Explore books by genre</p>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl shadow-blue-100 p-7">
                        {['Science Fiction', 'Romance', 'Self-Help', 'Psychology'].map((category, index) => (
                            <div className="bg-blue-100 py-6 px-4 rounded-lg text-center hover:bg-blue-200 transition" key={index}>

                      
                                <i className={`fas fa-book text-3xl text-blue-700 mb-2`}></i>
                                <i className={`fas fa-book text-3xl text-green-700 mb-2 ml-4`}></i>
                                 
                                <h3 className="font-semibold text-blue-900 mt-2">{category}</h3>
                                <button className='bg-yellow-400 text-white px-11 py-2 -translate-x-5 mt-7  rounded-lg font-semibold'>read</button>
                                <button className='bg-blue-400 text-white px-11 py-2 mt-7 rounded-lg font-semibold'>buy </button>
                            </div>
                        ))}
                    </div>
                </section>



                


{/* Featured Books Section */}
<section className="py-28 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold text-blue-900">📚 Featured Books</h2>
    <p className="text-gray-600 mt-3 text-lg">
      Ku raaxayso buugaagta ugu caansan iyo kuwa ugu akhriska badan
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-10 px-6 md:px-0">
    {[
      {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        summary: 'Sheeko aad u xiiso badan oo ka hadlaysa raadinta riyadaada nolosha.',
        img: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
      },
      {
        title: 'Atomic Habits',
        author: 'James Clear',
        summary: 'Buug kaa caawinaya inaad noloshaada ka dhigto mid habaysan adigoo wax yar bilowga ka bilaabaya.',
        img: 'https://covers.openlibrary.org/b/id/10594778-L.jpg',
      },
      {
        title: 'Becoming',
        author: 'Michelle Obama',
        summary: 'Qiso dhab ah oo laga qoray Michelle Obama oo dhiirrigelin leh.',
        img: 'https://covers.openlibrary.org/b/id/9362228-L.jpg',
      },
    ].map((book, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
      >
        <img
          src={book.img}
          alt={book.title}
          className="w-full h-72 object-cover"
        />
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-blue-800 mb-1">{book.title}</h3>
          <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
          <p className="text-gray-700 text-sm mb-4 flex-grow">{book.summary}</p>

          <div className="flex justify-between items-center mt-auto">
            <button className="bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm transition">
              View Details
            </button>
            <button className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-500 text-sm transition">
              Read Now
            </button>
            <button className="bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-400 text-sm transition">
              📌 Bookmark
            </button>
          </div>
        </div>
      </div>
    ))}
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
        


        
<Footer />

        
        
        
        
        </div>

 





    );
}

export default Home;