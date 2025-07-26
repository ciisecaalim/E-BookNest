import Footer from "../Components/footer"
import Header from "../Components/header"

function Contact () {
    return <div>

 

   {/* Contact Us Page */}
<section className="bg-white py-20 px-6 md:px-16 text-gray-800 mt-16">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4">📬 Contact Us</h2>
      <p className="text-gray-600 text-lg">Waxaan jeclaan lahayn inaan kaa maqalno! Haddii aad su'aal, talo, ama iskaashi rabto — nala soo xiriir.</p>
    </div>

    {/* Section 1: Reach Out */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2">📞 Nala Soo Xiriir</h3>
        <p className="text-gray-700 leading-relaxed">
          Waxaan diyaar u nahay inaan ka jawaabno su'aalahaaga. Waxaannu bixinnaa taageero 24/7 ah oo kuu fududaynaysa isticmaalka Booknest. Ha ka labalabeyn inaad noo soo dirto fariin!
        </p>
        <ul className="mt-4 text-gray-600 list-disc list-inside">
          <li>Email: contact@booknest.com</li>
          <li>Phone: +252 61 123 4567</li>
          <li>Location: Muqdisho, Somalia</li>
        </ul>
      </div>
      <img
        src="https://i.pinimg.com/736x/2d/71/23/2d712396f3fa88594cfa3173e3d00d4a.jpg"
        alt="Contact us"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Section 2: Support & Help */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <img
        src="https://i.pinimg.com/1200x/11/6a/f2/116af2df4855c0238abc76a88c6a179a.jpg"
        alt="Support team"
        className="rounded-xl shadow-lg"
      />
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2">🛠 Taageero & Gargaar</h3>
        <p className="text-gray-700 leading-relaxed">
          Waxaan haysanaa koox taageero oo kaa caawin kara wixii dhibaato ah. Haddii aad la kulanto cilad, buug la'aan, ama isdiiwaan galinta — nala soo xidhiidh si dhaqso leh.
        </p>
      </div>
    </div>

    {/* Section 3: Work With Us */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2">🤝 Nala Shaqeey</h3>
        <p className="text-gray-700 leading-relaxed">
          Ma tahay qoraa, turjubaan, ama akhriste danaynaya horumarinta buugaagta Soomaaliga? Waxaan marwalba raadineynaa iskaashi wax dhisaya. Nala soo xiriir si aan u dhisno mustaqbalka buugaagta.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80"
        alt="Work with us"
        className="rounded-xl shadow-lg"
      />
    </div>

    {/* Section 4: Feedback */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
        alt="Feedback"
        className="rounded-xl shadow-lg"
      />
      <div>
        <h3 className="text-2xl font-bold text-blue-800 mb-2">💬 Fikradaada Nagu Dhiib</h3>
        <p className="text-gray-700 leading-relaxed">
          Fikradahaaga waa muhiim! Waxaan rabnaa inaan hagaajino Booknest iyadoo aan ku saleyneyno aragtida akhristayaasha. Fadlan nala wadaag ra'yigaaga si aan u siino adeeg ka sii fiican.
        </p>
      </div>
    </div>

    {/* Final Call to Action */}
    <div className="text-center mt-16">
      <h4 className="text-xl font-bold text-blue-700 mb-2">📨 Noo Dir Fariin</h4>
      <p className="text-gray-600 mb-4">Soo buuxi foomka xiriirka ama nagala soo xiriir email ahaan — jawaab degdeg ah ayaad heli doontaa.</p>
      <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Go to Contact Form
      </button>
    </div>
  </div>
</section>



    

    </div>

}

export default Contact