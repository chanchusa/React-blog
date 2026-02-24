function Blog() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-4 text-center">
          Our Blog ✍️
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Read our latest articles and insights about development and tech.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">React Basics</h2>
            <p className="text-gray-400">
              Learn the fundamentals of React and how components work.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">Understanding Hooks</h2>
            <p className="text-gray-400">
              Dive deep into useState, useEffect and modern React patterns.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold mb-3">Tailwind Styling</h2>
            <p className="text-gray-400">
              Build beautiful and responsive designs easily with Tailwind CSS.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Blog;