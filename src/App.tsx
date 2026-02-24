import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
     <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-md">
  
  <h1 className="text-xl font-bold text-green-500">
    MyWebsite
  </h1>

  <div className="flex gap-6">
    <Link 
      to="/" 
      className="hover:text-green-400 transition duration-300"
    >
      Home
    </Link>

    <Link 
      to="/blog" 
      className="hover:text-green-400 transition duration-300"
    >
      Blog
    </Link>

    <Link 
      to="/contact" 
      className="hover:text-green-400 transition duration-300"
    >
      Contact
    </Link>
  </div>

</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;