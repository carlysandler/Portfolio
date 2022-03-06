import React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import Routes from "../constants/routes";
import { Link } from "gatsby";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn">
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <Routes styleClass="nav-routes"></Routes>
      </div>
    </nav>
  );
}

export default Navbar;
