import React from "react";
import logo from "../assets/images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import Routes from "../constants/routes";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
          <Routes styleClass="nav-routes"></Routes>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
