import React from "react";

import Form from "./../RequestForm";

import "./index.css";

const KickOff = () => {
  return (
    <div className="kick-off-container d-flex justify-content-around row p-3 p-md-5 rounded-1">
      <div className="col-11 col-md-10 col-lg-6 ">
        <h1 className="mt-5">
          Kick off your ACCA Prep journey with IndigoLear
        </h1>
        <p className="description fs-4">
          Sign-in and get instant access to our FREE Courses
        </p>
        <button type="button" className="btn btn-danger mb-3">
          Silver Learning Partner
        </button>
      </div>
      <div className="col-12 col-md-10 col-lg-6 d-flex justify-content-center align-items-center">
        <Form />
      </div>
    </div>
  );
};

export default KickOff;
