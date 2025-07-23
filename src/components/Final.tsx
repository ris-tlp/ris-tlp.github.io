import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Final() {
  return (
    <section className="container p-4 h-screen">
      <div className="flex flex-col space-y-8 mx-15 md:mx-0">
        <h1 className="text-8xl font-cursive text-center md:text-center mb-10">fin.</h1>

        <div className="flex flex-col items-center justify-between space-x-8">
          <img
            src="picture.jpg"
            alt="picture"
            className="w-32 h-32 md:w-1/3 md:h-1/3 rounded-lg md:rounded-4xl object-cover"
          />

          <div className="text-center mt-8 text-md md:text-2xl text-cream">
            <p>Thanks for reading! Feel free to reach out to me through any of my social links for a detailed resume or anything else you'd like to talk about. I'd love to connect!</p>
          </div>

          <div id="icons" className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/omar-pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg md:text-5xl hover:text-white transition" />
            </a>
            <a
              href="https://github.com/ris-tlp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg md:text-5xl hover:text-white transition" />
            </a>
            <a
              href="mailto:omarkhanplt@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-lg md:text-5xl hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
