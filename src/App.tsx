import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Dummy Content to Enable Scroll */}
      <div className="h-[200vh] bg-sage-green"></div>
    </>
  );
}
