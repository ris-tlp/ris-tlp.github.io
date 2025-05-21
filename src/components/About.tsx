export default function About() {
    let aboutMeItems: string[] = [
      "I'm a software engineer based in Virginia with over a year of experience across the entire stack. I take pride in my craft and thrive in environments where I’m tasked with solving problems under tight constraints and ambiguous requirements. I genuinely enjoy the challenge of finding solutions within these limitations while balancing user satisfaction and business objectives.",
      "I always prioritize simplicity in my solutions, knowing that it takes effort to identify and implement. Achieving simplicity while meeting business goals is often the bigger challenge, and it’s a puzzle I truly enjoy solving.",
      "I’ve been learning since sixth grade and I’m always looking for ways to expand my knowledge, whether it's reading about the journeys of experienced software engineers and large enterprises, or diving into self-driven projects with a hobby or two thrown in for fun.",
      "Outside of work, I enjoy observing the Messier catalog through my Dobsonian, jamming out to garage rock and countless other genres with my open-backs and IEMs, or spending time in the kitchen perfecting a symphony of sauces on my steak and cheese sandwich."
    ];
  
    return (
      <>
        <section className="container p-4 h-screen">
          <div className="flex flex-col space-y-8">
            <h1 className="text-8xl font-bold text-center md:text-start">about.</h1>
  
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {aboutMeItems.slice(0, 2).map((item, index) => (
                <div key={index} className={`md:space-y-8 ${index === 1 ? "md:mt-32" : ""}`}>
                  <p className="text-start">{item}</p>
                </div>
              ))}
            </div>
  
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto -my-6">
              {aboutMeItems.slice(2, 4).map((item, index) => (
                <div key={index} className={`space-y-8 ${index === 1 ? "md:mt-16" : ""}`}>
                  <p className="text-start">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
  