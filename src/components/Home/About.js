import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "../../css/about.module.css";

// import img from "../../images/defaultBcg.jpeg";

import Title from "../utils/Title";

const aboutImgQuery = graphql`
{
  file(relativePath:{eq: "defaultBcg.jpeg"}) {
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

const About = () => {
  const { file: {childImageSharp: {fluid: img}} } = useStaticQuery(
    aboutImgQuery,
  );
  // console.log(img);

  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={img} alt="about" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            officia.
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
