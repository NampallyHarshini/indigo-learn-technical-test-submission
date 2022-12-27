const Content = () => {
  return (
    <div>
      <h1>Become ACCA in 18 months</h1>
      <p className="fs-5">
        Acquire globally recognized accountancy qualification, ACCA (also called
        as Global CA), and get placed in top MNCs & Big4s. Begin ACCA prep with
        1FIN now.
      </p>
      {/* details */}
      <div className="row d-flex justify-content-around p-1">
        {/* register users */}
        <div className="col-12 col-xl-3 m-1  d-flex flex-column align-items-center  shadow details-container rounded">
          <div className="d-flex">
            <i class="bi bi-emoji-smile-fill me-1"></i>
            <p className="fw-bold">Registered Users</p>
          </div>
          <p className="fw-bold">248,755</p>
        </div>
        {/* Courser enrolled */}
        <div className="col-12 col-xl-3 m-1  d-flex flex-column align-items-center  shadow details-container rounded">
          <div className="d-flex">
            <i class="bi bi-book-half me-1"></i>
            <p className="fw-bold">Courses Enrolled</p>
          </div>
          <p className="fw-bold">65,147</p>
        </div>
        {/* minutes watched */}
        <div className="col-12 col-xl-3 m-1  d-flex flex-column align-items-center  shadow details-container rounded">
          <div className="d-flex">
            <i class="bi bi-display me-1"></i>
            <p className="fw-bold">Minutes Watched</p>
          </div>
          <p className="fw-bold">2,088,021,687</p>
        </div>
        {/* faculty */}
        <div className="col-12 col-xl-3 m-1  d-flex flex-column align-items-center  shadow details-container rounded">
          <div className="d-flex">
            <i class="bi bi-people-fill me-1"></i>
            <p className="fw-bold">Faculty</p>
          </div>
          <p className="fw-bold">8 Experts</p>
        </div>
      </div>
      {/* bns */}
      <button className="btn mt-3 mb-3 req-btn text-white me-3">
        Download Brochure
      </button>
      <button className="btn mt-3 mb-3 btn-danger text-white ">
        SILVER LEARNING PARTNER
      </button>
    </div>
  );
};

export default Content;
