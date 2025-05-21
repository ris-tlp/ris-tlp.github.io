import { Link } from "react-scroll";

export default function Slider() {
    return (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col p-4">
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
};
