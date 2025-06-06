import React from "react";
import { FaGithub, FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const connect = () => {
  const IconsLinks = [
    { name: <FaGithub size={25} />, link: "https://github.com/SuhasLingam" },
    {
      name: <FaLinkedin size={25} />,
      link: "https://www.linkedin.com/in/suhas-srinivas-lingam-655182221/",
    },
    {
      name: <BsTwitterX size={25} />,
      link: "https://twitter.com/suhaslingam400",
    },
    { name: <FaMedium size={25} />, link: "https://medium.com/@suhaslingam" },
    {
      name: <FaInstagram size={25} />,
      link: "https://www.instagram.com/suhas_lingam/",
    },
  ];

  return (
    <div className="md:h-[300px] flex flex-col justify-center items-center mb-8 space-y-8  font-anton md:mt-11 md:flex md:flex-col md:mb-11 md:items-center md:space-y-8 md:justify-center sticky z-10 text-white">
      {/**Connect  */}

      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <h1 className="md:text-6xl text-4xl">Find Me On</h1>
        <p className="md:text-3xl md:mt-2 flex items-center justify-center p-3">
          Feel free to{" "}
          <span className="px-[10px] text-blue-500"> Connect </span> on
        </p>
      </div>
      {/**Links  */}

      <div className=" flex text-white">
        <ul className="md:gap-9 flex flex-row gap-4">
          {IconsLinks.map((link) => (
            <li
              className={`md:hover:ring-blue-500  md:hover:ring-4 md:hover:transition-all md:hover:delay-70 md:hover:ease-in-out md:p-2 hover:ring-blue-500 hover:ring-4 hover:transition-all hover:delay-70 hover:ease-in-out p-2
              rounded-full `}
            >
              <a className="text-blue-500" href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default connect;
