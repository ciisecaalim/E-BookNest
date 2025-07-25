import Footer from "../../header/footer"
import Header from "../../header/header"
import img from "../../img/ciise.jpg"
 
function About () {
    return <div>
        <Header />



 {/* About Us Section */}
<section className="py-24 px-6 md:px-16 bg-white text-gray-800">
  <div className="max-w-6xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-4">📘 About Us</h2>
    <p className="text-gray-600 text-lg">
      Booknest waxaa aasaasay laba qof oo u heellan akhriska, kobcinta aqoonta, iyo faafinta buugaagta Af-Soomaaliga.
    </p>
  </div>

  {/* Section 1: Founders */}
  <div className="grid md:grid-cols-2 gap-12 items-center mb-20 ml-96">
    <div>
      <h3 className="text-2xl font-bold text-blue-800 mb-2">👥 Who We Are</h3>
      <p className="text-gray-700 leading-relaxed">
        Waxaan nahay laba aqoonyahan oo jecel buugaagta — <strong>Ciise</strong> iyo <strong>Mohamed</strong>. Himiladeennu waa in aan fududeyno helitaanka buugaag tayo leh oo Af-Soomaali ah, gaar ahaan kuwa aan si fudud loo heli karin.
      </p>
    </div>
    <img
      src={img} alt="Founders" className="rounded-xl shadow-lg w-[300px]"/>
  </div>

  {/* Section 2: Mission */}
  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <img
      src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
      alt="Mission"
      className="rounded-xl shadow-lg"
    />
    <div>
      <h3 className="text-2xl font-bold text-blue-800 mb-2">🎯 Our Mission</h3>
      <p className="text-gray-700 leading-relaxed">
        In aan dadkeena siino madal ay ka heli karaan buugaag cilmiga, dhaqanka, iyo suugaanta. Waxaan u aragnaa buugga inuu yahay furaha isbedelka qofeed.
      </p>
    </div>
  </div>

  {/* Section 3: What We Offer */}
  <div className="text-center mb-20">
    <h3 className="text-2xl font-bold text-blue-800 mb-4">📚 What We Offer</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-left">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-3 font-semibold">Service</th>
            <th className="p-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Digital Books', 'Hel buugaag online ah oo la akhrisan karo'],
            ['Book Reviews', 'Faallooyin buugaag si ay kuu sahlaan doorashada'],
            ['Free Resources', 'Buugaag bilaash ah oo cilmiyeed iyo akhris ah'],
            ['Bookmarking', 'Kaydi buugaagta aad rabto inaad dib u akhrido'],
            ['Search System', 'Raadi buug si degdeg ah oo fudud'],
          ].map(([title, desc], index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">{title}</td>
              <td className="p-3 text-gray-700">{desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Section 4: Vision */}
  <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
    <div>
      <h3 className="text-2xl font-bold text-blue-800 mb-2">👁 Our Vision</h3>
      <p className="text-gray-700 leading-relaxed">
        Waxaan rajeyneynaa in Booknest uu noqdo hoyga buugaagta Soomaaliga ah — meel uu qof walba ku kalsoonaan karo akhriska tayada leh.
      </p>
    </div>
    <img src="https://i.pinimg.com/1200x/22/4b/eb/224beb1c5c9ed365982de244d83c8e88.jpg" alt="Vision" className="rounded-xl shadow-lg" />
  </div>

  {/* Section 5: Join Us */}
  <div className="bg-blue-100 rounded-xl p-10 text-center">
    <h3 className="text-2xl font-bold text-blue-800 mb-4">🤝 Ciise Caalim Ahmed</h3>
    <p className="text-gray-700 mb-6">
      Waxaan si joogto ah u raadineynaa qorayaal, turjubaan, iyo dadka daneeya suugaanta. Haddii aad rabto inaad qeyb ka noqoto, nala soo xiriir.
    </p>
    <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
      Contact Us
    </button>
  </div>
</section>







         <div className="max-w-4xl mx-auto p-8 mb-48">
        <h1 className="text-4xl font-bold text-center mb-6">Managers</h1>
        <p className="text-gray-700 text-lg mb-8">
            We are a passionate team dedicated to delivering the best services to our customers. Our mission is to provide innovative solutions that meet the needs of our clients while maintaining the highest standards of quality and integrity.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-8">
            <li className="mb-2">Customer Satisfaction: We prioritize our clients' needs and strive to exceed their expectations.</li>
            <li className="mb-2">Integrity: We believe in transparency and honesty in all our dealings.</li>
            <li className="mb-2">Innovation: We embrace change and continuously seek new ways to improve.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">Ciise Caalim Ahmed</h3>
                <p className="text-gray-600">CEO</p>
                <p className="mt-2">John has over 10 years of experience in the industry and leads our team with vision and passion.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">Mohamed Abdulkadir Ahmed</h3>
                <p className="text-gray-600">CTO</p>
                <p className="mt-2">Jane is an expert in technology and innovation, driving our projects to success.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-bold">Ciise Caalim Ahmed</h3>
                <p className="text-gray-600">CMO</p>
                <p className="mt-2">Emily is responsible for our marketing strategies and ensuring our brand's voice is heard.</p>
            </div>
        </div>
    </div>





<Footer />




 
    </div>
}

export default About