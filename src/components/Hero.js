import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid => gatsby fragment

const query = graphql`
  {
    file(relativePath: { eq: "hero-temp.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const Hero = () => {
  // const data = useStaticQuery(query);
  // console.log(data);
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="hero-text"></div>
            <h1>hi, i'm carly!</h1>
            <h5>but you can call me code sis</h5>
            <h3>full-stack software engineer</h3>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
