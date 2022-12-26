import Header from '../Header'
import AccaPage from '../AccaPage'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Get Ready to be a Global CA</h1>
        <p className="home-description">
          Acquire the ACCA qualification to join the league of Global <br />
          Accounting & Finance Professionals
        </p>
        <div className="button-container">
          <button type="button" className="download-button">
            Download Brochure
          </button>
          <div className="silver-button">
            <h1 className="silver-heading"> SILVER LEARNING PARTNER</h1>
            <p className="logo">ACCA</p>
          </div>
        </div>
      </div>
      <form className="form-container">
        <h1 className="form-note">
          Aspiring to be an ACCA? Get in touch with us!
        </h1>

        <div className="input-container">
          <input
            type="text"
            className="email-input-field"
            placeholder="Email ID"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            className="phone-input-field"
            placeholder="Phone Number"
          />
        </div>
        <button type="submit" className="call-button">
          Request Call Back
        </button>
      </form>
    </div>
    <AccaPage />
  </>
)

export default Home
