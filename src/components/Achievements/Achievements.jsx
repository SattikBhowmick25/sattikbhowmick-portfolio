import React, { useState } from "react";
import { achievements } from "../../constants";
import Tilt from "react-parallax-tilt"; // Import the Tilt component for animation

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const handleOpenModal = (achievements) => {
    setSelectedAchievement(achievements);
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section
      id="achievements"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the achievements
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {achievements.map((achievement) => (
          <Tilt
          key={achievement.id}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={false}
          >
          <div
            key={achievement.id}
            onClick={() => handleOpenModal(achievement)}
            className="justify-center border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-purple-500/75 hover:border-purple-500 hover:duration-1000 hover:-translate-y-2 transition-transform duration-700 hover:scale-105">
            <div className="p-4">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="w-32 h-32 object-cover rounded-full justify-center mx-auto shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-xs text-gray-500 mb-4 pt-4 line-clamp-3">
                {achievement.description}
              </p>
            </div>
          </div>
          </Tilt>
        ))}
      </div>

      {/* Modal Container */}
      {/*selectedAchievement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>
            
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedAchievement.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedAchievement.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={selectedAchievement.result}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Result
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )*/}
    </section>
  );
};

export default Achievements;
