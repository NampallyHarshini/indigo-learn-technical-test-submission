import React from "react";

import Header from "../Components/Header";
import Landing from "../Components/Landing";
import WhyChooseUs from "../Components/WhyChooseUs";
import Learn from "./../Components/Learn";
import Placements from "./../Components/Placements";
import KickOff from "../Components/KickOff";
import Eligibility from "../Components/Eligibility";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Landing />
      <WhyChooseUs />
      <h1 className="mt-5 mb-5 fs-1 text-center title">
        ACCA - Eligibility
        <hr className="title-hr" />
      </h1>
      <Eligibility />
      <h1 className="mt-5 mb-5 fs-1 text-center title">
        What will you Learn in ACCA?
        <hr className="title-hr" />
      </h1>
      <Learn />
      <Placements />
      <KickOff />
    </div>
  );
};

export default Home;
