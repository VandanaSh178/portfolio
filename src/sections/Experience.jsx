import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { expCards } from "../constants";

gsap.registerPlugin(ScrollTrigger);

// A simple checkmark icon for the bullet points
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const Experience = () => {
  // Your GSAP animation code is great and doesn't need changes!
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });
  }, []);

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Work Experience</h2>
          <p className="text-lg text-gray-400 mt-4">My professional journey and key contributions.</p>
        </div>

        <div className="relative flex flex-col gap-12">
          {/* Vertical timeline bar */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-gray-700"></div>

          {expCards.map((card, index) => (
            <div key={index} className="timeline-card relative flex items-start gap-8">
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Experience Card Content */}
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full ml-8 md:ml-0 md:w-[calc(50%-2rem)] md:relative"
                   style={{ left: index % 2 === 0 ? 'calc(50% + 2rem)' : 'auto', right: index % 2 !== 0 ? 'calc(50% + 2rem)' : 'auto' }}>
                
                {/* Header */}
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  {card.status && (
                    <span className="bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                      {card.status}
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-blue-400 mb-1">{card.company}</p>
                <p className="text-sm text-gray-400 mb-4">{card.date} • {card.location}</p>

                {/* Responsibilities */}
                <ul className="space-y-3 text-gray-300 mb-6">
                  {card.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-md font-semibold text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {card.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;