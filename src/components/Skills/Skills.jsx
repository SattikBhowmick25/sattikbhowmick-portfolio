// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-md font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-2 py-10 px-0 justify-between">
      {SkillsInfo.map((category) => (
        <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-6 py-6 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
        <div
          key={category.title}  
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-1 bg-transparent border-2 border-gray-600 rounded-3xl py-2 px-4 sm:py-2 sm:px-0 w-28 text-center hover:bg-[#8245ec] hover:border-[#8245ec] transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                  <span className="text-xs sm:text-xs text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
        </div>
          </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
