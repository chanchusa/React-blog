function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-900 via-black to-green-950 flex flex-col justify-center items-center text-white px-6">
      
      <h1 className="text-5xl font-bold mb-6 text-center">
        Welcome to My Website 🚀
      </h1>

      <p className="text-lg text-gray-300 max-w-xl text-center mb-8">
        This is a simple React project with routing. 
        We are building modern web apps step by step.
      </p>

      <button className="bg-green-500 hover:bg-green-600 transition duration-300 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg">
        Explore More
      </button>

    </div>
  );
}

export default Home;