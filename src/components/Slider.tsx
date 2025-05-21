import { Link } from "react-scroll";

interface SliderProps {
  isHeroVisible: boolean;
}

export default function Slider({ isHeroVisible }: SliderProps) {
  return (
    <div
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-start p-4 transition-transform duration-500 ${isHeroVisible ? "-translate-x-full" : "translate-x-0"
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
      <Link
        to="work"
        smooth={true}
        duration={500}
        offset={-50}
        className="cursor-pointer px-4 py-2"
      >
        work.
      </Link>

      <Link
        to="school"
        smooth={true}
        duration={500}
        offset={0}
        className="cursor-pointer px-4 py-2"
      >
        school.
      </Link>
    </div>
  );
}
