import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { projectList } from "./projectData";

const project1 = () => {
  return (
    <div className="relative min-h-screen px-4 py-20">
      {/* Header Section */}
      <div className="sm:mb-16 container relative z-50 px-4 mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r from-white to-blue-500 mb-4 text-4xl font-bold text-center text-transparent">
            My Recent <span className="text-blue-500">Works</span>
          </h1>
          <p className="sm:text-lg md:text-xl max-w-2xl px-4 text-base text-center text-gray-400">
            Here are a few projects I've worked on recently
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="container relative z-40 px-4 mx-auto">
        <div className="sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8 grid grid-cols-1 gap-4">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-xl border-white/10 relative overflow-hidden border h-[400px] sm:h-[450px] lg:h-[500px]">
                {/* Image Container */}
                <div className="h-[45%] sm:h-[50%] overflow-hidden">
                  <img
                    src={project.pic}
                    alt={project.name}
                    className="group-hover:scale-110 object-cover object-center w-full h-full transition-transform duration-500 transform"
                  />
                  <div className="bg-gradient-to-t from-black/80 to-transparent absolute inset-0" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 h-[55%] sm:h-[50%] flex flex-col justify-between bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <div>
                    {/* Project Title */}
                    <h3 className="group-hover:text-purple-400 sm:mb-3 sm:text-2xl mb-2 text-xl font-bold text-white transition-colors">
                      {project.name}
                    </h3>

                    {/* Description */}
                    <div className="h-auto max-h-[120px] sm:max-h-[150px] overflow-y-auto custom-scrollbar">
                      <p className="sm:text-sm text-xs leading-relaxed text-gray-300">
                        {project.text}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="sm:gap-4 sm:mt-4 flex gap-3 mt-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-blue-600 sm:px-4 sm:text-sm flex items-center flex-1 gap-2 px-3 py-2 text-xs text-white transition-colors bg-blue-500 rounded-lg"
                      >
                        <BiLinkExternal className="sm:text-lg text-base" />
                        <span>Demo</span>
                      </a>
                    )}
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-gray-700 sm:px-4 sm:text-sm flex items-center flex-1 gap-2 px-3 py-2 text-xs text-white transition-colors bg-gray-800 rounded-lg"
                    >
                      <FaGithub className="sm:text-lg text-base" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4f46e5;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4338ca;
        }
      `}</style>
    </div>
  );
};

export default project1;
