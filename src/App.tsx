import { useState } from "react";
import { InView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Slider from "./components/Slider";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Final from "./components/Final";

import "./App.css";


export default function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  return (
    <>
      <Navbar />

      <InView
        as="div"
        id="hero"
        onChange={(inView) => setIsHeroVisible(inView)}
        threshold={0.7}
      >
        <div id="hero">
          <Hero />
        </div>
      </InView>

      <Slider isHeroVisible={isHeroVisible} />

      <div id="about">
        <About />
      </div>

      <div id="work">
        <WorkExperience />
      </div>


      <div id="school">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="fin">
        <Final />
      </div>
    </>
  );
}
