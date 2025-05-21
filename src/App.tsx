import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      {/* <div className="h-[200vh] bg-sage-green"></div> */}
    </>
  );
}
