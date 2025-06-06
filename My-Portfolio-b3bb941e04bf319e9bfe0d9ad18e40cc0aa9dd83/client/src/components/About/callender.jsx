import React, { useEffect, useState } from "react";
import ReactGitHubCalendar from "react-github-calendar";

const Calendar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const makeResponsive = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    makeResponsive();
    window.addEventListener("resize", makeResponsive);
    return () => {
      window.removeEventListener("resize", makeResponsive);
    };
  }, []);

  const explicitTheme = {
    dark: ["#383838", "#5582FB", "#104EF2", "#0C40CB", "#0B35A5"],
  };

  return (
    <div
      className={`sticky md:gap-11 my-11 flex flex-col ${
        isMobile ? "flex-col" : ""
      } items-center justify-center md:h-[400px]`}
    >
      <div>
        <h1 className="font-anton md:gap-2 md:text-6xl my-11 flex text-4xl text-white">
          Days I <b className="pl-2 text-blue-500"> Code</b>
        </h1>
      </div>
      <div className={`md:w-max flex ${isMobile ? "flex-col" : ""} text-white`}>
        <ReactGitHubCalendar
          username="Sumanth"
          colorScheme="dark"
          theme={explicitTheme}
          blockSize={isMobile ? 3 : 12}
          fontSize={isMobile ? 10 : 14}
        />
      </div>
    </div>
  );
};

export default Calendar;
