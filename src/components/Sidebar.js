import React from "react";
import Routes from "../constants/routes";
import SocialLinks from "../constants/socialLinks";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="btn-close" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="sidebar-container">
        <Routes styleClass={`${isOpen ? "sidebar-routes" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
