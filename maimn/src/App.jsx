import "./index.css";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import ProductViewer from "./components/productViewer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  );
}

export default App;
