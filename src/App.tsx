import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="h-[200vh] bg-sage-green"></div>
    </>
  );
}
