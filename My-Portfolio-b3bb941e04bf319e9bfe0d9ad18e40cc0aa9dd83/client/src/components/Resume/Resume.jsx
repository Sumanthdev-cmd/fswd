import React from "react";
import resumePDF from "../../assets/resume/resume.pdf";

const Resume = () => {
  return (
    <div className="relative z-10 w-full min-h-screen pt-[80px] flex flex-col items-center bg-transparent">
      {/* Header Text */}
      <h2 className="md:text-6xl mb-6 text-3xl font-bold text-white">
        Here's My <span className="text-blue-500">Resume</span>
      </h2>

      {/* PDF Container */}
      <div className="w-full max-w-4xl mb-6 overflow-hidden bg-transparent">
        <div className="pdf-container w-full">
          <iframe
            src={resumePDF + "#toolbar=0&view=FitH&scrollbar=0"}
            type="application/pdf"
            className="w-full h-[calc(100vh-160px)] overflow-hidden"
            style={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
              WebkitBackgroundComposite: "transparent",
              msOverflowStyle: "none", // IE and Edge
              scrollbarWidth: "none", // Firefox
            }}
          />
        </div>
      </div>

      {/* Download Button */}
      <a
        href={resumePDF}
        download="Sumanth_Resume.pdf"
        className="hover:bg-blue-700 flex items-center gap-2 px-6 py-3 mb-4 text-white transition-colors duration-300 bg-blue-600 rounded-lg"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
