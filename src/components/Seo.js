import React from "react";
import Projects from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title }) {
  return <Helmet title={title}></Helmet>;
}
export default SEO;
