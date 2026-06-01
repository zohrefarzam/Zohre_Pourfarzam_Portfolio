import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const impactAiRef = useRef(null);
  const flightioRef = useRef(null);
  const arshRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [impactAiRef.current, flightioRef.current, arshRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={impactAiRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Impact AI Platform" />
            </div>
            <div className="text-content">
              <h2>
                AI-Powered Platform to Monitor and Analyze AI Products — Including
                the Hera Project with ESA &amp; Microsoft
              </h2>
              <p className="text-white-50 md:text-xl">
                Built with Next.js, HeroUI, Storybook, and a monorepo architecture
                for scalable team collaboration and component reuse.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={flightioRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Flightio Platform Rebuild"
                />
              </div>
              <h2>Flightio Platform Rebuild</h2>
            </div>

            <div className="project" ref={arshRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Arsh Meeting Planner" />
              </div>
              <h2>Arsh Meeting Planner with Jalali Calendar</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
