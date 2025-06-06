import React from "react";
import {
  BashOriginal,
  VscodeOriginal,
  TailwindcssPlain,
  Windows8Original,
  SolidityOriginal,
  SshOriginalWordmark,
  CPlain,
  CplusplusOriginal,
  AnacondaOriginal,
  PythonOriginalWordmark,
  ReactOriginal,
  Css3Original,
  DebianOriginal,
  DockerOriginalWordmark,
  GitOriginal,
  GithubOriginal,
  HerokuOriginalWordmark,
  Html5Original,
  LinuxOriginal,
  JavascriptOriginal,
  MysqlOriginalWordmark,
  UbuntuPlain,
  TypescriptOriginal,
  NextjsOriginal,
} from "devicons-react";
import block from "../../assets/blockchain-icon.svg";
import { SiVercel } from "react-icons/si";

const Skills = () => {
  const skillCategories = {
    "Programming Languages": [
      { id: "ts", name: <TypescriptOriginal size={45} />, label: "TypeScript" },
      { id: "js", name: <JavascriptOriginal size={45} />, label: "JavaScript" },
      { id: "c", name: <CPlain size={45} />, label: "C" },
      { id: "cpp", name: <CplusplusOriginal size={45} />, label: "C++" },
      {
        id: "python",
        name: <PythonOriginalWordmark size={45} />,
        label: "Python",
      },
      {
        id: "solidity",
        name: <SolidityOriginal size={45} />,
        label: "Solidity",
      },
    ],
    "Frontend Development": [
      { id: "nextjs", name: <NextjsOriginal size={45} />, label: "Next.js" },
      { id: "react", name: <ReactOriginal size={45} />, label: "React" },
      { id: "html", name: <Html5Original size={45} />, label: "HTML5" },
      { id: "css", name: <Css3Original size={45} />, label: "CSS3" },
      {
        id: "tailwind",
        name: <TailwindcssPlain size={45} />,
        label: "Tailwind",
      },
    ],
    "Backend & Database": [
      {
        id: "drizzle",
        name: (
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
            DRIZZLE
          </div>
        ),
        label: "Drizzle ORM",
      },
      {
        id: "mysql",
        name: <MysqlOriginalWordmark size={45} />,
        label: "MySQL",
      },
    ],
    "Tools & Technologies": [
      {
        id: "docker",
        name: <DockerOriginalWordmark size={45} />,
        label: "Docker",
      },
      { id: "git", name: <GitOriginal size={45} />, label: "Git" },
      { id: "github", name: <GithubOriginal size={45} />, label: "GitHub" },
      { id: "vscode", name: <VscodeOriginal size={45} />, label: "VS Code" },
      {
        id: "vercel",
        name: <SiVercel className="text-black" size={45} />,
        label: "Vercel",
      },
    ],
    "Operating Systems & Infrastructure": [
      { id: "linux", name: <LinuxOriginal size={45} />, label: "Linux" },
      { id: "windows", name: <Windows8Original size={45} />, label: "Windows" },
      { id: "debian", name: <DebianOriginal size={45} />, label: "Debian" },
      { id: "ubuntu", name: <UbuntuPlain size={45} />, label: "Ubuntu" },
      { id: "bash", name: <BashOriginal size={45} />, label: "Bash" },
      { id: "ssh", name: <SshOriginalWordmark size={45} />, label: "SSH" },
    ],
    "Other Skills": [
      {
        id: "anaconda",
        name: <AnacondaOriginal size={45} />,
        label: "Anaconda",
      },
      {
        id: "blockchain",
        name: <img src={block} className="size-[70px]" alt="Blockchain" />,
        label: "Blockchain",
      },
    ],
  };

  return (
    <div className="relative z-10 min-h-screen px-4 py-16">
      <div className="absolute inset-0 bg-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="md:text-6xl font-anton mb-4 text-4xl text-white">
            My{" "}
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-transparent">
              Tech Stack
            </span>
          </h1>
          <p className="text-lg text-gray-400">
            Technologies I've been working with
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={`category-${category}`}
              className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 
                       hover:border-blue-500/20 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h2 className="md:text-3xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-8 text-2xl font-bold text-transparent">
                {category}
              </h2>

              <div className="sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group relative flex flex-col items-center justify-center p-4 h-28
                             rounded-xl bg-white/[0.03] 
                             border border-white/[0.05]
                             transition-all duration-300 
                             hover:bg-white/[0.08]
                             hover:border-blue-500/50
                             hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="relative flex flex-col items-center">
                      <div className="bg-blue-500/20 blur-2xl group-hover:opacity-70 absolute inset-0 transition-opacity duration-300 rounded-full opacity-0" />
                      <div className="group-hover:scale-110 relative z-10 transition-transform duration-300">
                        {skill.name}
                      </div>
                    </div>

                    <div className="-bottom-12 left-1/2 group-hover:opacity-100 absolute transition-all duration-300 transform -translate-x-1/2 opacity-0">
                      <div className="bg-blue-500/10 backdrop-blur-md border-blue-500/20 px-3 py-1 border rounded-lg shadow-lg">
                        <span className="whitespace-nowrap text-sm text-gray-200">
                          {skill.label}
                        </span>
                      </div>
                      <div
                        className="absolute -top-1 left-1/2 -translate-x-1/2 transform
                                    border-l-[6px] border-l-transparent
                                    border-r-[6px] border-r-transparent
                                    border-b-[6px] border-b-blue-500/20"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
