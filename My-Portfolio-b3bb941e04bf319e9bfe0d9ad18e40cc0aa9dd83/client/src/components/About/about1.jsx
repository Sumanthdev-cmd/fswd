import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const about1 = () => {
  const extras = [
    { name: "Attending Conferences" },
    { name: "Organizing Events" },
    { name: "Participate In Hackathons and CTF's" },
  ];

  return (
    <div>
      <div className="font-anton md:w-full pt-[170px] w-fit md:h-screen md:flex-row sticky flex flex-col h-screen p-6 text-justify text-white">
        {/**Whoami */}
        <div className="md:w-full md:h-full md:bg-transparent md:justify-center md:items-center md:flex-col flex flex-col items-center justify-center">
          <h1 className="md:text-6xl md:justify-center md:items-center md:flex items-center justify-center text-4xl">
            <b className="px-2 text-blue-500">Who</b> Am I ?
          </h1>
          <p className="text-wrap md:text-3xl md:p-8 md:text-justify ">
            This is <b className="p-2 text-blue-500">SUMANTH B J</b> ,
            from Hassan, popularly known as “the city of destiny”, in
            Karnataka. I’m a third year student at  Malnad College Of Engineering,
            pursuing
            <b className="p-2 text-blue-500">computer science</b>
            engineering. <br /> <br /> Im the Industry Engagement Co-Ordinator
            <b className="p-2 text-blue-500">Head</b>of the IUCEE-EWB-MCE
            across India
          </p>
          <br />
          <p className="md:text-3xl flex text-xl">
            Apart from coding, some other activities that I love to do!
          </p>
          <div className="flex md:flex-col flex-col mt-[50px]  md:mt-4 md:text-2xl text-base text-[#4e7ada]">
            {extras.map((n) => (
              <p
                key={n.name}
                className="md:flex-row md:gap-3 flex items-center"
              >
                <FaArrowCircleRight /> {n.name}{" "}
              </p>
            ))}
          </div>
        </div>
        {/**Image */}
        <div className="md:w-[85%] justify-center items-center md:h-screen md:justify-center md:items-center flex">
          <iframe
            className="size-[250px] md:size-[420px] "
            src="https://lottie.host/embed/086d9b97-1b15-4f32-8452-94dae03ddcbf/hZCHOCzWpT.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default about1;
