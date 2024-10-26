import React from "react";
import "../css/footers.css";
import { Link } from "react-router-dom";
function Footers() {
  return (
    <div className="foot-btn">
      {" "}
      <hr />
      <div className="foot-container">
        <div>
          <Link to="/about" className="cursor">
            about
          </Link>
        </div>
        <div>
          {" "}
          <Link to="/contack" className="cursor">
            {" "}
            contack
          </Link>
        </div>
        <div>
          <Link to="/" className="cursor">
            lorem
          </Link>
        </div>
      </div>
      <div className="developer">
        <p className="cursor">2024 © CyberTempest</p>{" "}
      </div>
    </div>
  );
}

export default Footers;
