import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef}>
      <Tilt
        options={{ max: 25, scale: 1, speed: 400 }}
        className="bg-tertiary p-5 rounded-2xl w-full flex flex-col h-[520px]"
      >
        {/* IMAGE */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl group">
          <img
            src={image}
            alt="project"
            className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

          <div className="absolute top-3 right-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5 flex flex-col flex-grow">
          <h3 className="text-white font-bold text-[22px] min-h-[56px]">
            {name}
          </h3>

          <p className="mt-2 text-secondary text-[14px] leading-relaxed flex-grow">
            {description}
          </p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className={`text-[13px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      <div className="w-full flex flex-col">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects showcase my skills through real-world applications,
          highlighting my ability to design, build, and deploy modern solutions
          using various technologies.
        </p>

        {/* NEW GITHUB LINE */}
        <p className="mt-4 text-white text-[16px]">
           For more projects, visit my{" "}
          <span
            onClick={() => window.open("https://github.com/Thanushaa22", "_blank")}
            className="text-purple-400 cursor-pointer hover:underline"
          >
            GitHub repositories
          </span>.
        </p>
      </div>

      <div className="works-container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card w-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
