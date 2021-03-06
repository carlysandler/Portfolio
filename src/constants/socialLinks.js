import React from "react";

import {
  FaLinkedin,
  FaGithub,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/carlysandler/",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/carlysandler",
  },
  {
    id: 3,
    icon: <FaPinterest className="social-icon"></FaPinterest>,
    url: "https://www.pinterest.com/sandlercarly/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/SandlerCarly",
  },
];
const socialLinks = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>
      {socialLinks}
    </ul>
  );
};
