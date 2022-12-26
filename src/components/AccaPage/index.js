import {TiTick} from 'react-icons/ti'
import {IoBulbOutline} from 'react-icons/io5'
import {BsPeopleFill} from 'react-icons/bs'
import {AiOutlineSafety} from 'react-icons/ai'
import './index.css'

const Home = () => (
  <div className="AccaPage-container">
    <h1 className="heading">What is ACCA?</h1>
    <hr className="line" />
    <div className="card-container">
      <ul>
        <li>
          ACCA (Association of Chartered Certified Accountants) is a globally
          recognized accounting qualification offered by ACCA Global, UK
        </li>
        <li>It provides unlimited career opportunities with MNCs and Big4s</li>
        <li>A course which you can complete along with your graduation</li>
        <li>
          It has 2 lakh + members & 5 lakh + students across 180+ countries
        </li>
      </ul>
    </div>
    <div className="card-items-container">
      <div className="card-item">
        <h1>Levels</h1>
        <p>Three (13 papers)</p>
      </div>
      <div className="card-item">
        <h1>Duration</h1>
        <p>6-30 months</p>
      </div>
      <div className="card-item">
        <h1>Exams</h1>
        <p>Quarterly (Online)</p>
      </div>
      <div className="card-item">
        <h1>Exemptions</h1>
        <p>Upto 9 papers</p>
      </div>
    </div>
    <div className="whyAcca-container">
      <h1 className="heading">Why Choose Us?</h1>
      <hr className="line" />
      <div className="card-items-container">
        <div className="item-container">
          <div className="acca-logo-container">
            <IoBulbOutline className="icon" />
            <h1 className="card-name">Expert Faculty</h1>
          </div>
          <div className="list-items-container">
<p> Our Faculty are subject matter</br>
      expertise with practical experience.</br>
      they believe in #studentFirst </br>
      principle</p>
        </div>
        </div>
        <div className="item-container">
          <BsPeopleFill className="icon" />
          <h1 className="card-name">Complete Success Package</h1>
          <div className="list-items-container">
<p> Leading Exam Prep Destination with</br>
      Video Clases,Live sessions,Doubt</br>
      resolution Forums,E-notes from</br>
      Kalpan,MCQs,Practice tests,</br>
      Webinars</p>
        </div>
        </div>
        <div className="item-container">
          <AiOutlineSafety className="icon" />
          <h1 className="card-name">Placements</h1>
          <div className="list-items-container">
        <p>Resume building workshops,mock </br>
      interviews and placement drives will</br>
      help you impress the top employers</br>
      and get the dream job.</p>
      </div>
    </div>
    <div className="start-time-container">
      <p className="start-time-heading">
        Live classes start from late September, 2022.
        <span className="spanElement">Click here to Enrol Now.</span>
      </p>
      <div className="silver-container">
        <h1 className="silverHeading"> SILVER LEARNING PARTNER</h1>
        <p className="silver-logo">ACCA</p>
      </div>
    </div>
    <div className="eligibility-card-container">
      <h1 className="heading">ACCA - Eligibility</h1>
      <hr className="line" />
      <p className="note">
        To appear for the ACCA course examination a candidate should have
      </p>
      <p className="eligibility-point">
        <TiTick />
        Qualified the 10+2 exams
      </p>
      <p className="eligibility-point">
        <TiTick />
        An aggregate of 65% in Mathematics / Accounts and English and a minimum
        of 50% in other subjects
      </p>
    </div>
    <div>
      <h1 className="heading">What will you Learn in ACCA?</h1>
      <hr className="line" />
      <div className="card-items-container">
        <div className="item-container learn_acca">
          <h1 className="card-name">Knowledge Level</h1>
          <div className="list-items-container">
            <ul className="list-items ">
              <li className="item">Business and Technology (BT)</li>
              <li className="item">Management Accounting (MA)</li>
              <li className="item">Financial Accounting (FA)</li>
            </ul>
            <button type="button" className="enroll-button">
              3 papers
            </button>
          </div>
        </div>
        <div className="item-container learn_acca">
          <h1 className="card-name">Skill Level</h1>
          <div className="list-items-container">
            <ul className="list-items">
              <li className="item">Corporate and Business Law (LW)</li>
              <li className="item">Performance Management (PM)</li>
              <li className="item">Taxation (TX)</li>
              <li className="item">Financial Reporting (FR)</li>
              <li className="item">Audit and Assurance (AA)</li>
              <li className="item">Financial Management (FM)</li>
            </ul>
            <button type="button" className="enroll-button">
              6 papers
            </button>
          </div>
        </div>
        <div className="item-container learn_acca">
          <h1 className="card-name">Professional Level</h1>
          <div className="list-items-container">
            <ul className="list-items">
              <li className="item">Compulsory</li>
              <li className="item">SBL - Strategic Business Leader</li>
              <li className="item">SBR - Strategic Business Reporting</li>
              <li className="item">Two out of the following</li>
              <li className="item">Advanced Financial Management (AFM)</li>
              <li className="item">Advanced Performance Management (APM)</li>
              <li className="item">Advanced Taxation (ATX)</li>
              <li className="item">Advanced Audit and Assurance (AAA)</li>
            </ul>
            <button type="button" className="enroll-button">
              4 papers
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="eligibility-card-container">
      <h1 className="heading"> 100% Placement Assistance</h1>
      <hr className="line" />
      <h1 className="eligibility-heading">Resume Building</h1>
      <p className="eligibility-point">
        1FIN provides professional guidance to help you create an effective
        resume to help you create a lasting impression.
      </p>
      <h1 className="eligibility-heading">Career Counselling</h1>
      <p className="eligibility-point">
        We provide career counselling to conducting mock interviews and aptitude
        tests – we will assist you at every step, all the way, we make you job
        ready
      </p>
      <h1 className="eligibility-heading">Jobs</h1>
      <p className="eligibility-point">
        We will give you an edge over others with our direct corporate
        affiliations which will ensure that you are placed right.
      </p>
    </div>
  </div>
)

export default Home
