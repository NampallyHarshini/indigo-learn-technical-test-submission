const Form = () => {
  const stop = (e) => {
    e.preventDefault();
    const main = document.getElementById("success");
    main.classList.remove("hide");
    setTimeout(() => {
      main.classList.add("hide");
    }, 5000);
  };
  return (
    <form onSubmit={stop} className="my-form shadow p-3 p-md-5 col-12 col-lg-9">
      <p className="fs-5 text-center">
        Aspiring to be an ACCA? Get in touch with us!
      </p>
      {/* Phone no */}
      <div className="input-container border rounded-2 p-2 mb-3">
        <input
          className="w-100 border-0 input-element ps-2"
          placeholder="Phone Number*"
          required
          type="text"
        />
      </div>
      {/* Email */}
      <div className="input-container border rounded-2 p-2 mb-3">
        <input
          className="w-100 border-0 input-element ps-2"
          placeholder="Email ID"
          required
        />
      </div>
      {/* current qualification */}
      <select
        required
        class="w-100 border rounded-2 p-2 mb-3 input-element"
        aria-label="Default select example"
        placeholder="Current Qualification"
      >
        <option selected value="none">
          Current Qualification
        </option>
        <option value="2">CA</option>
        <option value="3">Bcom</option>
        <option value="3">CS</option>
        <option value="3">CMA</option>
        <option value="3">Other</option>
      </select>
      {/* interested in */}
      <select
        required
        class="w-100 border rounded-2 p-2 mb-3 input-element"
        aria-label="Default select example"
        placeholder="Current Qualification"
      >
        <option selected value="none">
          Interested in
        </option>
        <option value="1">ACCA Level I</option>
        <option value="2">ACCA Level II</option>
        <option value="3">ACCA Level III</option>
      </select>
      <button type="submit" className="w-100 btn req-btn text-white fw-bold">
        Request Call Back
      </button>
      <div id="success" className="success hide">
        Thank you! we wiil get in touch with you soon.
      </div>
    </form>
  );
};

export default Form;
