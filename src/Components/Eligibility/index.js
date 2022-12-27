import React from "react";

import "./index.css";

const Eligibility = () => {
  return (
    <div className="eligibility-container mb-5 p-3 p-md-5">
      <h1 className="eligibility-title fs-2  mb-3">
        To appear for the ACCA course examination a candidate should have
      </h1>
      <p className="fs-5">
        <i class="bi bi-check-lg"></i> Qualified the 10+2 exams
      </p>
      <p className="fs-5">
        <i class="bi bi-check-lg"></i> An aggregate of 65% in Mathematics /
        Accounts and English and a minimum of 50% in other subjects
      </p>
      <p className="fs-5">
        <i class="bi bi-check-lg"></i> Others can still register for the ACCA
        course with Foundation in Accountancy (FIA)
      </p>
    </div>
  );
};

export default Eligibility;
