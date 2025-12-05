import "./index.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/productViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer"



gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
