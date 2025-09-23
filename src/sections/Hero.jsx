import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants/index.jsx"; // Ensure correct path to your constants
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    // Animate the main hero text headers into view
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
    
    // Create a timeline for a smooth, step-by-step word slider
    const wordSlider = gsap.timeline({
      repeat: -1, // Repeat the animation indefinitely
      defaults: { ease: "sine.inOut", duration: 0.7 }, // Set default ease for a smooth feel
    });

    // Animate to each word in the list, pausing between each one
    words.forEach((_, index) => {
      if (index > 0) {
        wordSlider.to(".word-wrapper", {
          y: `-${index * 5.5}rem`, // Slide up by the height of one word
          delay: 1.5, // Wait for 1.5 seconds before sliding
        });
      }
    });

    // Add a final animation to slide back to the first word, completing the loop
    wordSlider.to(".word-wrapper", {
      y: 0,
      delay: 1.5,
    });

  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden">
      {/* Main layout container */}
      <div className="flex md:flex-row flex-col items-center w-full min-h-screen pt-20 md:pt-0">
        
        {/* LEFT COLUMN: Hero Content */}
        <header className="flex-1 flex flex-col justify-center items-start md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight flex items-center gap-4">
                Shaping
                {/* The "mask" container for the slider */}
                <span className="text-blue-400 h-[4rem] md:h-[5.5rem] overflow-hidden">
                  {/* The wrapper that will be animated */}
                  <span className="flex flex-col word-wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-3 h-[4rem] md:h-[5.5rem]"
                      >
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                into Real Projects
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                that Deliver Results
              </h1>
            </div>

            <p className="text-gray-300 md:text-xl max-w-lg mt-4">
              Hi, I’m Vandana Sharma, a developer with a passion for code.
            </p>

            <Button
              text="SEE MY WORK"
              className="mt-4"
              // ... other props
            />
          </div>
        </header>

        {/* RIGHT COLUMN: 3D Model */}
        <figure className="flex-1 w-full h-screen">
          <HeroExperience />
        </figure>

      </div>
    </section>
  );
};

export default Hero;