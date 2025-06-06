import React from "react";

const intro = () => {
  return (
    <div className="md:h-screen md:w-full md:flex-row flex flex-col">
      <div className="font-anton md:gap-3 w-full md:text-wrap md:mt-[170px] md:m-auto md:justify-center justify-center container sticky z-20 flex  flex-col text-white bg-transparent">
        <div className="md:mb-11 justify-center md:justify-center md:ml-10  m-auto  md:mt-[60px] flex md:flex-row gap-3 text-4xl md:text-6xl">
          <h1>
            Let Me <span className=" text-blue-500">Introduce</span> Myself
          </h1>
        </div>

        <div className="md:ml-10 md:flex-wrap md:w-fit md:h-full md:text-2xl justify-center w-full p-[13%] md:p-0 space-y-6 text-lg">
          <h1>Welcome to my Digital space!</h1>
          <p>
            I am fluent in languages like
            <span className="text-blue-500">
              {" "}
              Python, C, C++, Javascript.
            </span>{" "}
            .
          </p>
          <p>
            My field of interest's are building new
            <span className="text-blue-500">
              {" "}
              Web Applications and Pentesting🕵
            </span>
            and also in areas related to
            <span className="text-blue-500">
              {" "}
              Blockchain and Solving CTF's{" "}
            </span>
            .
          </p>
          <p>
            In my spare time, I apply my passion for developing products with
            <span className="text-blue-500"> React.js </span> and Other
            Technologies and Frameworks like
            <span className="text-blue-500"> Hardhat </span>.
          </p>
        </div>
      </div>

      <div className="md:m-auto md:w-full md:h-full sticky z-30 flex items-center justify-center">
        <iframe
          className="md:size-[70%]  size-[400px] "
          src="https://lottie.host/embed/b11d0d61-f0bb-485c-9650-821179063379/JJwqK5jptv.json"
        ></iframe>
      </div>
    </div>
  );
};

export default intro;
