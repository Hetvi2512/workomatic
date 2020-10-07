import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/workomatic.svg";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/book">
        Book Now
      </Link>
      <Link className="options" to="/book">
        Contact
      </Link>
    </div>
  </div>
);
export default Header;
