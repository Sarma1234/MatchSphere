import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>MatchSphere</h2>

          <p>
            Find the right people for every purpose.
            Travel, study, startups, roommates,
            fitness and much more.
          </p>

          <div className="social-icons">

            <FaGithub />

            <FaLinkedin />

            <FaInstagram />

            <FaTwitter />

          </div>

        </div>

        <div className="footer-links">

          <div className="footer-column">

            <h3>Platform</h3>

            <a href="#">Discover</a>

            <a href="#">Categories</a>

            <a href="#">How It Works</a>

            <a href="#">Community</a>

          </div>

          <div className="footer-column">

            <h3>Company</h3>

            <a href="#">About</a>

            <a href="#">Contact</a>

            <a href="#">Careers</a>

            <a href="#">Blog</a>

          </div>

          <div className="footer-column">

            <h3>Legal</h3>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Cookies</a>

            <a href="#">Support</a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 MatchSphere. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;