import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center md:justify-between md:items-center h-screen">
        <div className="flex-col">
          <h1 className="text-8xl font-bold">omar khan.</h1>
          <div id="icons" className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/omar-pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl hover:text-white transition" />
            </a>
            <a
              href="https://github.com/ris-tlp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl hover:text-white transition" />
            </a>
            <a
              href="mailto:omarkhantlp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-3xl hover:text-white transition" />
            </a>
          </div>
        </div>

        <p className="text-xl mt-8 md:mt-0">
          software engineer • audiophile • amateur astronomer • sandwich
          enthusiast
        </p>


      </section>


    </>
  );
}
