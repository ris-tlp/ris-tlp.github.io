import WorkCard from "./WorkCard";

export default function WorkExperience() {
    return (
        <section className="container p-4 h-screen">
            <div className="flex flex-col space-y-8">
                <h1 className="text-8xl font-bold text-center md:text-start">work.</h1>


                <WorkCard
                    logo="https://i.imgur.com/30ZxJVd.png"
                    jobTitle="Software Engineer"
                    companyName="Smart and Small Thermal Systems"
                    companyUrl="https://s2ts.umd.edu/"
                    dates="April 2024 - Present"
                    location="College Park, Maryland"   
                    description="Led the development of the Rapid Energy Audit SaaS application, enabling Maryland state agencies to conduct virtual building energy audits and eliminating the need for manual pre-audit processes.
                     Collaborated with a multidisciplinary agile team and stakeholders from the Maryland government to deliver solutions that are being used to support and meet the state's energy reduction goals."
                />


                <WorkCard
                    logo="https://i.imgur.com/30ZxJVd.png"
                    jobTitle="Software Engineer Intern"
                    companyName="Penny"
                    companyUrl="https://penny.co/"
                    dates="May 2021 - July 2021"
                    location="Dhahran, KSA"
                    description="Collaborated with the data engineering team to enhance the B2B e-commerce platform’s data infrastructure, developing ETL pipelines to integrate external vendor data, optimizing queries for better performance, and strengthening QA processes for improved platform reliability."
                />




            </div>
        </section>
    );
}
