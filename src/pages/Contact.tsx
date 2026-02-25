function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center px-6 py-16 text-white">
      
      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl w-full max-w-lg">
        
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Me 📩
        </h1>

        <form className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition duration-300 py-3 rounded-lg font-semibold shadow-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;