import React from "react";
import {connect } from 'react-redux';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/workomatic.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from './../../redux/user/user.action';
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
const mapStateToProps=state=>({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(Header);
