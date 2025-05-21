import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Slider from "./components/Slider";

import "./App.css";


export default function App() {
  return (
    <>
      <Navbar />

      <Slider />

      <div id="hero">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>
    </>
  );
}
