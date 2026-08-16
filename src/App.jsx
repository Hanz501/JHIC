import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Vision from "./components/Vision/visi";
import FindMore from "./components/FindMore/findmore";
import Career from "./components/Career/career";
import Testimonies from "./components/Testimonies/testimonies";
import Blog from "./components/Blog/blog";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="text-gray-900">
      <Navbar />
      <Hero />
      <Vision />
      <FindMore />
      <Career />
      <Testimonies />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;