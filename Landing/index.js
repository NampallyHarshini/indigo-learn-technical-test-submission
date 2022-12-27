import React from "react";

import Form from "./../RequestForm";

import Content from "../Content";

import "./index.css";

const Landing = () => {
  return (
    <div className="landing-container p-lg-5 pt-5 pb-5 row d-flex align-items-center justify-content-center ">
      <div className="col-11 col-md-10 col-lg-6 mb-5">
        <Content />
      </div>
      <div className="col-11 col-md-10 col-lg-6 d-flex justify-content-center align-items-center">
        <Form />
      </div>
    </div>
  );
};

export default Landing;
