interface EducationCardProps {
    universityName: string;
    degreeName: string;
    universityUrl: string;
    dates: string;
    location: string;
}

export default function EducationCard({
    universityName,
    degreeName,
    universityUrl,
    dates,
    location,
}: EducationCardProps) {
    return (
        <>
            <h2 className="text-lg md:text-3xl font-extrabold">
                <a href={universityUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {universityName}
                </a>
            </h2>

            <h3 className="text-md font-semibold md:text-2xl">{degreeName}</h3>

            <p className="text-md">
                {dates} | {location}
            </p>
        </>
    );
}
