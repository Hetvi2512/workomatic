import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/workomatic.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="options" to="/book">
        BOOK NOW
      </Link>
      <Link className="options" to="/book">
        CONTACT
      </Link>
      {currentUser ? (
        //if currentuser is true then it goes to div otherwise to Link
        //auth.signOut is provided by firebase
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
export default Header;
