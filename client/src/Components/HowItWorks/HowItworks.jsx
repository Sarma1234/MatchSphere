import "./HowItWorks.css";
import { FaUserPlus, FaSearch, FaComments } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="section-header">
        <p>HOW IT WORKS</p>
        <h2>Three simple steps.</h2>
      </div>

      <div className="steps">

        <div className="step-card">
          <div className="step-icon">
            <FaUserPlus />
          </div>

          <h3>Create Profile</h3>

          <p>
            Tell us who you are, your interests,
            and what you're looking for.
          </p>
        </div>

        <div className="step-card">
          <div className="step-icon">
            <FaSearch />
          </div>

          <h3>Discover Matches</h3>

          <p>
            Browse people based on purpose and
            compatibility.
          </p>
        </div>

        <div className="step-card">
          <div className="step-icon">
            <FaComments />
          </div>

          <h3>Start Connecting</h3>

          <p>
            Chat instantly and build meaningful
            connections.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;