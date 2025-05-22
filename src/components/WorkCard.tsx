import { FaExternalLinkAlt } from "react-icons/fa";

interface WorkCardProps {
  logo: string;
  jobTitle: string;
  companyName: string;
  companyUrl: string;
  dates: string;
  location: string;
  description: string;
}

export default function WorkCard({
  jobTitle,
  companyName,
  companyUrl,
  dates,
  location,
  description,
}: WorkCardProps) {
  return (
    <div className="flex flex-row w-full max-w-5xl p-4 mx-auto">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-4xl text-start font-extrabold text-cream">{jobTitle}</h2>
        <div className="flex items-center">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-md md:text-xl text-cream flex text-start md:text-center items-center hover:underline"
          >
            {companyName}
            <FaExternalLinkAlt className="hidden md:block ml-2 text-cream" />
          </a>
        </div>

        <p className="text-start text-sm text-cream mt-2">
          {dates} | {location}
        </p>

        <p className="font-light text-start text-sm md:text-lg text-cream mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}
