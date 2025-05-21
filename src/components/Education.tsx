import EducationCard from "./EducationCard";

export default function Education() {
    return (
        <section className="container p-4 h-screen flex items-center justify-center">
            <div className="flex flex-col space-y-8">
                <h1 className="text-8xl font-bold text-center md:text-start">school.</h1>

                <div className="flex flex-col md:flex-row justify-end gap-y-15 md:gap-x-24">
                    <div className="text-center md:text-right">
                        <EducationCard
                            degreeName="Master of Engineering in Software Engineering"
                            universityName="University of Maryland, College Park"
                            universityUrl="https://umd.edu/"
                            dates="January 2023 - December 2024"
                            location="College Park, Maryland"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <EducationCard
                            degreeName="Bachelor of Science in Software Engineering"
                            universityName="King Fahd University of Petroleum and Minerals"
                            universityUrl="https://www.kfupm.edu.sa/"
                            dates="August 2018 - May 2022"
                            location="Dhahran, KSA"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
