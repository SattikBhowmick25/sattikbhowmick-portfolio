import React from "react";
import { education } from "../../constants"; // Import the education data
import Tilt from "react-parallax-tilt"; // Import the Tilt component for animation
const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-md font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="fixed sm:absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "justify-start sm:justify-start" : "justify-end sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className=" fixed sm:visible sm:absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full "
              />
            </div>

            {/* Content Section */}
            <Tilt
            key={edu.id}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <div
              className={`ml-0 mr-0 w-full sm:max-w-96 p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-18" : "sm:mr-18"
              } sm:ml-16 sm:mr-16 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* School Logo/Image */}
                <div className="w-2/5 h-2/5 bg-white rounded-full overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree, School Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-xs text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              <p className="text-sm mt-4 text-gray-400 font-bold">CGPA/Grade: {edu.grade}</p>
              <p className=" text-sm mt-4 text-gray-400">{edu.desc}</p>
            </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
