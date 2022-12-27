import React from "react";

import "./index.css";

const WhyChooseUs = () => {
  return (
    <div className="bg-light mt-5 pt-5 pb-5 w-100">
      <h1 className="title text-center fw-semibold mb-4">
        Why Choose Us?
        <hr className="title-hr" />
      </h1>
      {/* details */}
      <div className="main-details-container row d-flex justify-content-around">
        <div className="main-detail rounded-2 m-1 d-flex flex-column align-items-center shadow col-12 col-md-8 col-lg-5 col-xl-3">
          <img
            src="https://www.indigolearn.com/media/images/ca_concept.png"
            alt=""
            className="img-fluid w-50"
          />
          <h1 className="detail-title fs-4">Expert Faculty</h1>
          <p className="text-center desc">
            Our Faculty are subject matter expertise with practical experience.
            They believe in #StudentFirst principle
          </p>
        </div>
        <div className="main-detail rounded-2 m-1 d-flex flex-column align-items-center shadow col-12 col-md-8 col-lg-5 col-xl-3">
          <img
            src="https://www.indigolearn.com/media/images/ca_top_faculties.png"
            alt=""
            className="img-fluid w-50"
          />
          <h1 className="detail-title fs-4">Complete Success Package</h1>
          <p className="text-center desc">
            Leading Exam Prep Destination with Video classes, Live sessions,
            Doubt resolution Forums, E-notes from Kaplan, MCQs, Practice tests,
            Webinars.
          </p>
        </div>
        <div className="main-detail rounded-2 m-1 d-flex flex-column align-items-center shadow col-12 col-md-8 col-lg-5 col-xl-3">
          <img
            src="https://www.indigolearn.com/media/images/ca_unlimited_views.png"
            alt=""
            className="img-fluid w-50"
          />
          <h1 className="detail-title fs-4">Placements</h1>
          <p className="text-center desc">
            Resume building workshops, mock interviews and placement drives will
            help you impress the top employers and get the dream job.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="pattern-container mt-3 row d-flex justify-content-around w-100">
        <div className="text-center col-12 col-lg-3 col-xl-2 m-3 mt-2 mb-2 pt-3 pb-3 rounded-2 shadow bg-light each-pattern">
          <h1>Levels</h1>
          <p className="fw-semibold">
            <i class="bi bi-book-half me-2"></i>
            Three (13 papers)
          </p>
        </div>
        <div className="text-center col-12 col-lg-3 col-xl-2 m-3 mt-2 mb-2 pt-3 pb-3 rounded-2 shadow bg-light each-pattern">
          <h1>Duration</h1>
          <p className="fw-semibold">
            <i class="bi bi-alarm me-2"></i>
            6.30 months
          </p>
        </div>
        <div className="text-center col-12 col-lg-3 col-xl-2 m-3 mt-2 mb-2 pt-3 pb-3 rounded-2 shadow bg-light each-pattern">
          <h1>Exams</h1>
          <p className="fw-semibold">
            <i class="bi bi-laptop me-2"></i>
            Quarterly(online)
          </p>
        </div>
        <div className="text-center col-12 col-lg-3 col-xl-2 m-3 mt-2 mb-2 pt-3 pb-3 rounded-2 shadow bg-light each-pattern">
          <h1>Levels</h1>
          <p className="fw-semibold">
            <i class="bi bi-calendar-check me-2"></i>
            Upto 9 Papers
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
