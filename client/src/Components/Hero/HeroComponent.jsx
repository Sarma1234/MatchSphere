import "./Hero.css";
import Orbit from "./Orbit";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          🚀 Find Your Perfect Match
        </p>

        <h1>
          One platform.
          <br />
          Endless
          <span> meaningful connections.</span>
        </h1>

        <p className="hero-description">
          MatchSphere helps you discover people for every purpose—
          travel partners, study buddies, startup co-founders,
          roommates, gym partners and much more.
        </p>

        <div className="hero-buttons">

          <button>
            Get Started
          </button>

          <button className="secondary">
            Explore
          </button>

        </div>

      </div>

      <div className="hero-right">
        <Orbit />
      </div>

    </section>
  );
}

export default Hero;  