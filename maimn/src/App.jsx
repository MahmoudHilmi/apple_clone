import "./index.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/productViewer";
import Showcase from "./components/Showcase";
import Performence from "./components/Performence";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
      <Performence />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
}

export default App;
