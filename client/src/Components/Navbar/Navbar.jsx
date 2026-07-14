
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        MatchSphere
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/discover">Discover</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="nav-buttons">

        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;