import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/Home-All";
import AboutAll from "./components/About/About-All";
import ProjectsAll from "./components/Projects/ProjectsAll";
import ParticleBg from "./components/particle-bg";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Resume from "./components/Resume/Resume";

const App = () => {
  return (
    <>
      <div>
        <ParticleBg />
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutAll />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<ProjectsAll />} />
          </Routes>
        </BrowserRouter>

        <Footer />
      </div>
    </>
  );
};

export default App;
