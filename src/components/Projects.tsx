import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <>
            <section className="container p-4 space-y-8 h-fit">
                <h1 className="text-4xl md:text-8xl font-bold text-center md:text-start">projects.</h1>

                <div className="mx-15 my-15 md:my-0">
                    <ProjectCard
                        title="Observation Tracker"
                        description="Observation Tracker is a powerful tool designed for both amateur and professional astronomers. It offers a platform to easily record, organize, and share celestial discoveries. Built with a fully HATEOAS-compliant Spring Boot API, it ensures robust, scalable performance with a production-grade deployment, capable of handling high-volume data processing and ensuring seamless integration with external services."
                        githubUrl="https://github.com/ris-tlp/observation-tracker"
                        imageUrl="https://raw.githubusercontent.com/ris-tlp/observation-tracker/refs/heads/main/media/architecture_diagram.png"
                        techStack={["Java", "Spring Boot", "Hibernate", "AWS", "Redis", "RabbitMQ", "GitHub Actions", "Terraform", "Docker"]}
                        isGithub={true}
                        reverse={false}
                    />

                    <ProjectCard
                        title="Audiophile Analytics Pipeline"
                        description="An ETL pipeline that extracts data from Crinacle’s Headphone and In-Ear Monitor databases, processes and prepares the data for integration into a Metabase dashboard. This dashboard provides detailed analytics, helping users make informed purchasing decisions on headphones or IEMs by evaluating custom criteria that balance price and performance."
                        githubUrl="https://github.com/ris-tlp/audiophile-e2e-pipeline"
                        imageUrl="https://i.imgur.com/new0qvF.png"
                        techStack={["Python", "SQL", "AWS", "dbt", "Airflow", "Terraform", "Metabase", "Docker"]}
                        isGithub={true}
                        reverse={true}
                    />

                    <ProjectCard
                        title="Wijha Tourism"
                        description="Wijha is a collaborative, mobile-based tourism app designed for the MENA region. It connects users with local tour guides, enabling experiences that can only be experienced through local expertise, while also offering a platform for communication between locals and tourists. Wijha serves as a comprehensive solution for both tourists and locals."
                        githubUrl="https://github.com/ris-tlp/wijha-api-v2"
                        imageUrl="https://i.imgur.com/rxw4YkW.png"
                        techStack={["Python", "Django", "Flutter", "MongoDB", "AWS", "Terraform", "GitHub Actions", "Docker"]}
                        isGithub={true}
                        reverse={false}
                    />

                    <ProjectCard
                        title="iKFUPM Scheduler"
                        description="Scheduler is an application that was created to solve a fundamental problem faced by KFUPM students, which was creating a combination of class schedules without any conflicts from the most up-to-date course schedules provided by the university. Over 4 billion timetable combinations were generated, 10 million timetables were downloaded and every semester over 8,000 students have used it at least once."
                        websiteUrl="https://www.ikfupm.com/scheduler/index.php"
                        imageUrl="https://i.imgur.com/hs6Uj16.png"
                        techStack={["Python", "PHP", "SQL", "AWS", "Flask", "GitHub Actions", "Docker"]}
                        isGithub={false}
                        reverse={true}
                    />

                    <ProjectCard
                        title="Galaxy Morphology Classification"
                        description="Classification of astronomical galaxies using their morphological features through machine learning models using categories taken from Edwin Hubble’s galaxy classification scheme, better known as the Hubble Tuning Fork. This classification scheme classifies galaxies according to the different stages throughout a galaxy’s lifetime. This project explores the importance of a comprehensive model selection and evaluation process by cross-comparing the performance of multiple models."
                        websiteUrl="https://drive.google.com/file/d/1uzorFwZ9Hphw0Lhut7nsgc7GSq-ppjEo/view?usp=sharing"
                        imageUrl="https://i.imgur.com/lgIJiUp.png"
                        techStack={["Python", "KNN", "Naive Bayes", "Decision Trees", "Logisitc Regression", "LDA", "NumPy", "Pandas"]}
                        isGithub={false}
                        reverse={false}
                    />


                    <ProjectCard
                        title="MacOS UNIX Rice"
                        description="Dots/configuration files for various customized MacOS and third-party components and software that I use on a daily basis."
                        websiteUrl="https://github.com/ris-tlp/dotfiles"
                        imageUrl="https://i.imgur.com/ASys2Tu.jpeg"
                        techStack={["Shell", "Lua", "CSS"]}
                        isGithub={true}
                        reverse={true}
                    />

                </div>
            </section>
        </>
    )
}




// import WorkCard from "./WorkCard";

// export default function WorkExperience() {
//     return (
//         <section className="container p-4 h-screen">
//             <div className="flex flex-col space-y-8">
//                 <h1 className="text-8xl font-bold text-center md:text-start">work.</h1>

//                 <WorkCard
//                     logo="https://i.imgur.com/30ZxJVd.png"
//                     jobTitle="Software Engineer"
//                     companyName="Smart and Small Thermal Systems"
//                     companyUrl="https://s2ts.umd.edu/"
//                     dates="April 2024 - Present"
//                     location="College Park, Maryland"   
//                     description="Led the development of the Rapid Energy Audit SaaS application, enabling Maryland state agencies to conduct virtual building energy audits and eliminating the need for manual pre-audit processes.
//                      Collaborated with a multidisciplinary agile team and stakeholders from the Maryland government to deliver solutions that are being used to support and meet the state's energy reduction goals."
//                 />

//                 <WorkCard
//                     logo="https://i.imgur.com/30ZxJVd.png"
//                     jobTitle="Software Engineer Intern"
//                     companyName="Penny"
//                     companyUrl="https://penny.co/"
//                     dates="May 2021 - July 2021"
//                     location="Dhahran, KSA"
//                     description="Collaborated with the data engineering team to enhance the B2B e-commerce platform’s data infrastructure, developing ETL pipelines to import over 100,000 SKUs from external vendors, optimizing queries for improved performance, and strengthening QA processes to enhance platform reliability."
//                 />

//             </div>
//         </section>
//     );
// }

// interface ProjectCardProps {
//     title: string;
//     description: string;
//     githubUrl: string;
//     imageUrl: string;
//     stack: string[];
//     reverse?: boolean;
// }