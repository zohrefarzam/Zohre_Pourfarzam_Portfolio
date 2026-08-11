import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { skillCategories, techStackImgs } from "../constants";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-logo-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      ".skill-category",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-categories",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Technical Skills & Expertise"
          sub="Technologies I work with"
        />

        <div className="tech-logo-strip">
          {techStackImgs.map((tech) => (
            <div key={tech.name} className="card-border tech-logo-card group">
              <div className="tech-card-animated-bg" />
              <div className="tech-logo-card-content">
                <img src={tech.imgPath} alt={tech.name} />
                <p>{tech.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-chip-row">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-chip ${
                      skill.level === "core" ? "is-core" : ""
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
