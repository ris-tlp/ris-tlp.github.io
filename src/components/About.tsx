export default function About() {
    let aboutMeItems: string[] = [
        "I'm a software engineer passionate about building scalable, reliable solutions that make an impact. With experience across both backend and frontend development, I thrive in creating seamless, data-driven applications that support long-term sustainability.",
        "I enjoy diving deep into new technologies, constantly learning and applying creative problem-solving techniques to complex challenges. Whether it’s optimizing performance or exploring new frameworks, I’m always looking to improve and refine my craft.",
        "Outside of coding, I’m an avid amateur astronomer, integrating my personal interests into projects, like developing an observation tracker to enhance my telescope experiences. When I’m not stargazing, I love staying active, whether it’s through hiking, exploring the outdoors, or diving into new books.",
        "Throughout my career, I’ve worked closely with multidisciplinary teams, including engineers, designers, and government agencies, to drive impactful, data-driven projects. I take pride in fostering collaboration and working towards solutions that align with both technical goals and business objectives.",
        "I'm always eager to mentor early-career developers, sharing my experiences and helping them navigate the complexities of the tech world. I believe in empowering others and creating an environment where learning and growth are prioritized.",
        "As an engineer, I’m deeply invested in making an impact not just within the code I write, but in the broader mission of the projects I work on. I recognize technology is a means to an end, but a powerful one.",
        "I’m passionate about developing solutions that have a lasting impact, especially in areas that contribute to sustainability and efficiency. I enjoy the challenge of working in dynamic environments where innovation and practicality meet."
    ];

    aboutMeItems = [
        "I'm a software engineer based in Virginia with over a year of experience working across the entire stack. I take pride in my craft and thrive in environments where I’m tasked with solving problems under tight constraints and ambiguous requirements.  I genuinely enjoy the challenge of finding solutions within these limitations while balancing user satisfaction and business objectives.",
        // "Throughout my career, I’ve worked closely with multidisciplinary teams, including engineers from other disciplines, designers, and government agencies, to drive impactful, data-driven projects. I take pride in fostering collaboration and working towards solutions that align with both technical goals and business objectives.",
        // "I enjoy diving deep into new technologies, constantly learning and applying creative problem-solving techniques to complex challenges. Whether it’s optimizing performance or exploring new frameworks, I’m always looking to improve and refine my craft.",
        "My approach to delivering solutions is always prioritizing simplicity. Simplicity requires effort to recognize and implement, and maintaining it while meeting business goals is arguably much more difficult, and that's a puzzle I like solving!"


    ]


    return (
        <>
            <section className="container p-4 h-screen">
                <div className="flex flex-col space-y-8">
                    <h1 className="text-8xl font-bold text-center md:text-start">about.</h1>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <p className="text-start">{aboutMeItems[0]}</p>
                        </div>
                        <div className="md:mt-32">
                            <p className="text-start">{aboutMeItems[1]}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <p className="text-start">{aboutMeItems[2]}</p>
                        </div>
                        <div className="md:mt-32">
                            <p>{aboutMeItems[3]}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <p>{aboutMeItems[4]}</p>
                        </div>
                        <div className="md:mt-32">
                            <p>{aboutMeItems[5]}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="space-y-8">
                            <p>{aboutMeItems[6]}</p>
                        </div>
                        <div className="md:mt-32">
                            <p>{aboutMeItems[7]}</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}