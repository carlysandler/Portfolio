import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import TechSkills from "../components/TechSkills";
import Experience from "../components/Experience";
import AllProjects from "../components/AllProjects";
import SEO from "../components/Seo";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
