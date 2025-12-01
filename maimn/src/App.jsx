import "./index.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/productViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Showcase from "./components/Showcase";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ProductViewer />
      <Showcase />
    </main>
  );
}

export default App;
