import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { educationCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    gsap.from(".education-card", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#education",
        start: "top 80%",
      },
    });
  });

  return (
    <section
      id="education"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Education"
          sub="🎓 Academic Background"
        />
        <div className="mt-16 flex flex-col gap-8">
          {educationCards.map((card) => (
            <div
              key={card.institution}
              className="education-card card-border rounded-xl p-10 max-w-3xl"
            >
              <h2 className="font-semibold text-3xl">{card.degree}</h2>
              <p className="text-xl mt-3">{card.institution}</p>
              <p className="my-5 text-white-50">
                🗓️&nbsp;{card.date}
                <span className="block mt-1">📍&nbsp;{card.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
