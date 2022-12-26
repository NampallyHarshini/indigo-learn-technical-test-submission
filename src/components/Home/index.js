import Header from '../Header'
import AccaPage from '../AccaPage'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Become ACCA in 18 months</h1>
        <p className="home-description">
          Acquire globally recognized accountancy qualification,ACCA(also called as Global CA),and <br />
          get placed in top MNCs & Big4s,Begin ACCA prep with 1FlN now
   
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
            className="phone-input-field"
            placeholder="Phone Number"
          />
        </div>
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
            className="CurrentQualification-input-field"
            placeholder="Current Qualification"
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            className="intrested in-input-field"
            placeholder="Intrested in"
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
