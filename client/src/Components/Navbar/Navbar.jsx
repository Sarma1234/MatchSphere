import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MatchSphere
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Discover</li>
        <li>Categories</li>
        <li>About</li>
      </ul>

      <div className="nav-buttons">

        <button className="login-btn">
          Login
        </button>

        <button className="signup-btn">
          Get Started
        </button>

      </div>

    </nav>
  );
}

export default Navbar;