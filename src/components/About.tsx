export default function About() {
  let aboutMeItems: string[] = [
    "I'm a software engineer with over a year of experience across the entire stack. I take pride in my craft and thrive in environments where I’m tasked with solving problems under tight constraints and ambiguous requirements. I genuinely enjoy the challenge of finding solutions within these limitations while balancing user satisfaction and business objectives.",
    "I try and prioritize simplicity in my solutions, understanding that while complexity comes easily, simplicity requires effort to identify, design, and implement. Balancing simplicity with business goals is often the greater challenge, and it's a puzzle I truly enjoy solving.",
    "Learning software engineering has always been a core part of my routine, whether it’s through reading the experiences of seasoned engineers and large enterprises, or working on personal projects with a hobby or two mixed in. My goal is to build solid, practical knowledge so that I can eventually give back by sharing what I’ve learned through technical articles to help other engineers grow.",
    "Outside of work, I enjoy observing the Messier catalog through my Dobsonian, jamming out to garage rock and countless other genres with my open-backs and IEMs, or spending time in the kitchen finding the perfect symphony of sauces for my steak and cheese sandwich."
  ];

  return (
    <>
      <section className="container p-4 h-fit md:h-screen">
        <div className="flex flex-col space-y-8 mx-15 md:mx-0">
          <h1 className="text-5xl md:text-8xl font-bold text-center md:text-start">about.</h1>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
            {aboutMeItems.slice(0, 2).map((item, index) => (
              <div key={index} className={`md:space-y-8 ${index === 1 ? "md:mt-32" : ""}`}>
                <p className="text-start">{item}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto -my-6">
            {aboutMeItems.slice(2, 4).map((item, index) => (
              <div key={index} className={`space-y-8 ${index === 1 ? "md:mt-32" : ""}`}>
                <p className="text-start">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
