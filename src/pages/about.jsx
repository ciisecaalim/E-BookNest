export default function AboutPage() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image Section */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
            alt="Inside Bookstore"
            className="w-full rounded-xl shadow-md object-cover h-full"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Bookstore</h2>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            At <span className="font-semibold text-blue-600">📚 Booknest</span>, we’ve been passionate about books since the day we opened our doors. Founded in 2010, our mission has always been simple: to connect people with the stories, ideas, and knowledge that inspire them.
          </p>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            We offer a carefully curated collection of books from all genres—fiction, non-fiction, self-help, children's literature, academic resources, and much more. Our experienced staff are book lovers themselves, always ready to recommend something special for every kind of reader.
          </p>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            More than just a bookstore, we are a community. We host regular book clubs, author signings, and events that bring readers and writers together. Whether you’re a student, a casual reader, or a lifelong bibliophile—you’ll find your place here.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Shop online or visit our physical location to browse shelves filled with literary treasures. Enjoy fast delivery, secure payments, and friendly customer service. At Readers' Haven, we believe every book can change a life.
          </p>
        </div>

      </div>
    </section>
  );
}
