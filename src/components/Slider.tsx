import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Slider() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroTop = heroSection.getBoundingClientRect().top;

        // Check if the Hero section is in the viewport
        if (heroTop <= 0 && heroTop + heroSection.offsetHeight >= 0) {
          setIsHeroVisible(true); // Hero section is visible in the viewport
        } else {
          setIsHeroVisible(false); // Hero section is not visible in the viewport
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check on page load
    handleScroll();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col p-4 transition-transform duration-500 ${
        !isHeroVisible ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <Link
        to="hero"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer px-4 py-2"
      >
        intro.
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        offset={-70}
        className="cursor-pointer px-4 py-2"
      >
        about.
      </Link>
    </div>
  );
}
