import React from "react";
import Intro from "./intro";
import Home1 from "./home1";
import Connect from "./connect";

const homePage = () => {
  return (
    <div>
      <Home1 />
      <Intro />
      <Connect />
    </div>
  );
};

export default homePage;
