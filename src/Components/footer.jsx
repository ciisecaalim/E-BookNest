function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 pt-14 pb-8 px-6 md:px-16 lg:px-32 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">

        {/* Booknest Branding */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">📚 Booknest</h2>
          <p className="text-gray-300 leading-relaxed">
            A digital haven for book lovers. Browse, read, and collect your favorite e-books anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">ABOUT</a></li>
            <li><a href="/shop" className="hover:text-yellow-400 transition">BOOKS</a></li>
            <li><a href="/Contact" className="hover:text-yellow-400 transition">CONTACT</a></li>
          
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-3">
            Stay updated with the latest releases and deals.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input type="email" placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-white text-white focus:outline-none focus:ring-2 focus:ring-green-400"/>
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-5 py-2 rounded font-semibold hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <p className="text-gray-300 mb-3">Follow us on social media:</p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-white pt-5 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Booknest</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
