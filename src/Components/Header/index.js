import React from "react";

import Offcanvas from "./../OffCanvas";

import "./index.css";

const Header = () => {
  return (
    <nav className="header fw-semibold d-flex justify-content-between align-items-center pt-2 pt-md-0 pb-2 pb-md-0 ps-3 pe-3 ps-md-5 pe-md-5">
      <Offcanvas />
      <ul className="nav-ul-container d-none d-lg-flex  justify-content-between d-flex align-items-center text-white">
        <li className="me-3">BUY COURSES</li>
        <li className="me-3">BUY BOOKS</li>
        <li className="me-3">PROGRAMS</li>
        <li className="me-3">FREE RESOURCES</li>
      </ul>
      <button className="d-none d-lg-block btn btn-light btn-color fw-semibold">
        <i class="bi bi-person-circle me-2"></i>Login/Sign Up
      </button>
    </nav>
  );
};

export default Header;
