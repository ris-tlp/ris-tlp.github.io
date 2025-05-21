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
      {/* Content Section */}
      <div className="flex flex-col items-start">
        {/* Job Title and Company Name */}
        <h2 className="text-4xl font-extrabold text-cream">{jobTitle}</h2>
        <div className="flex items-center">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-cream flex items-center underline"
          >
            {companyName} <FaExternalLinkAlt className="ml-2 text-sm" />
          </a>
        </div>

        {/* Subtitle with Dates and Location */}
        <p className="text-sm text-cream mt-2">
          {dates} | {location}
        </p>

        <p className="font-light text-start text-lg text-cream mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}
