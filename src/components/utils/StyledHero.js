import React from "react";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

const getBackgroundImgQuery = graphql`
 {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledHero = ({ img, className, children, home }) => {
  const { file: {childImageSharp: {fluid: bcgImg}} } = useStaticQuery(
    getBackgroundImgQuery,
  );

  return (
    <BackgroundImage className={className} fluid={img || bcgImg} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  min-height: ${(props) => (props.home ? "calc(100vh - 62px)" : "50vh")};
  background: ${(props) =>
  props.home
    ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
    : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;
