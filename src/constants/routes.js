import React from "react";
import { Link } from "gatsby";

const routes = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const routeLinks = routes.map(route => {
  return (
    <li key={route.id}>
      <Link to={route.url}>{route.text}</Link>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={`nav-routes ${styleClass ? styleClass : ""}`}>
      {routeLinks}
    </ul>
  );
};
