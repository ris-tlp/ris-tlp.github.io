import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons

interface ProjectCardProps {
    title: string;
    description: string;
    githubUrl?: string;
    websiteUrl?: string;
    imageUrl: string;
    techStack: string[];
    reverse?: boolean;
    isGithub?: boolean;
}

export default function ProjectCard({
    title,
    description,
    githubUrl,
    websiteUrl,
    imageUrl,
    techStack,
    reverse,
    isGithub,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-6 space-y-6 md:space-y-0">
            <div className={`w-full md:w-1/3 ${reverse ? "md:order-2" : ""}`}>
                <img src={imageUrl} className="h-48 w-96 rounded-lg object-cover mx-auto md:mx-0" />
            </div>

            <div className={`flex flex-col md:w-2/3 mx-4 text-cream ${reverse ? "md:items-end" : "md:items-start"}`}>
                <div className="flex items-center justify-center text-center mb-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    {/* Conditionally render either GitHub or Website Icon */}
                    {isGithub ? (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-cream hover:text-white text-2xl"
                        >
                            <FaGithub />
                        </a>
                    ) : (
                        <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-cream hover:text-white text-2xl"
                        >
                            <FaExternalLinkAlt />
                        </a>
                    )}
                </div>

                <p className={`mb-4 ${reverse ? "md:text-right" : "md:text-left"}`}>{description}</p>

                <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <span key={index} className="text-xs text-cream px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
