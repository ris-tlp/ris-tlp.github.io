import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navbarHeight = 80; // Adjust if your navbar height is different

  // Track scroll position to determine how far the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Calculate the scroll progress as a percentage of the hero section
      const progress = Math.min(window.scrollY / (window.innerHeight - navbarHeight), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion animation properties for text and icons
  const logoAnimation = {
    x: -scrollProgress * (window.innerWidth / 2 - 100), // Moves leftwards
    y: -scrollProgress * (window.innerHeight / 2 - navbarHeight), // Moves upwards
    scale: Math.max(1 - scrollProgress, 0.3), // Shrink the logo as user scrolls
    opacity: Math.max(1 - scrollProgress, 0), // Fade out the logo as user scrolls
    transition: {
      type: "spring", // Smooth spring animation
      stiffness: 100,
      damping: 25,
    },
  };

  const iconsAnimation = {
    // Move the social icons to the top-right of the current viewport
    x: scrollProgress * (window.innerWidth - 100) * 1.5, // Increase speed by multiplying by 1.5
    y: -scrollProgress * (window.innerHeight / 2 - navbarHeight), // Move icons upwards
    opacity: Math.max(1 - scrollProgress, 0), // Fade out icons as user scrolls
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
    },
  };

  const paragraphAnimation = {
    opacity: Math.max(1 - scrollProgress, 0), // Fade out the paragraph text
    y: scrollProgress * 50, // Optionally move the paragraph up a bit as it disappears
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
    },
  };

  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
      <div className="flex-col">
        <motion.h1
          className="text-8xl font-bold"
          animate={logoAnimation} // Apply the animation based on scrollY
        >
          omar khan.
        </motion.h1>
        <motion.div
          id="icons"
          className="flex space-x-4 mt-4 justify-center"
          animate={iconsAnimation} // Animate social icons to the top-right of the viewport
        >
          <a
            href="https://www.linkedin.com/in/omar-pk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-hover-cream transition" />
          </a>
          <a
            href="https://github.com/ris-tlp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-hover-cream transition" />
          </a>
          <a
            href="mailto:omarkhantlp@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-3xl hover:text-hover-cream transition" />
          </a>
        </motion.div>
      </div>

      <motion.p
        className="text-xl mt-8 md:mt-0"
        animate={paragraphAnimation} // Apply animation to fade out the paragraph text
      >
        software engineer • audiophile • amateur astronomer • sandwich
        enthusiast
      </motion.p>
    </section>
  );
}
