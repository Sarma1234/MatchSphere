import "./Orbit.css";

function Orbit() {
  return (
    <div className="orbit-container">

      <div className="ring ring1">
        <div className="planet p1">
          Travel
        </div>
      </div>

      <div className="ring ring2">
        <div className="planet p2">
          Startup
        </div>
      </div>

      <div className="ring ring3">
        <div className="planet p3">
          Study
        </div>
      </div>

      <div className="center-glow">

        <div className="center-core">
          YOU
        </div>

      </div>

    </div>
  );
}

export default Orbit;