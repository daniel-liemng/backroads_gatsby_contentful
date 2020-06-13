import React from "react";
import Image from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { FaMap } from "react-icons/fa";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import styles from "../../css/tour.module.css";

const getDefaultImg = graphql`
  {
    defaultImg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const {
defaultImg: {
      childImageSharp: { fluid: img },
    },
  } = useStaticQuery(getDefaultImg);

  const { name, price, country, days, slug, images } = tour;

  // let mainImg = images[0].fluid

  // let mainImg
  // if (images) {
  //   mainImg = images[0].fluid
  // } else mainImg = img

  let mainImg = images ? images[0].fluid : img;

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImg} className={styles.img} alt="single tour" />
        <AniLink fade to={`/tours/${slug}`} className={styles.link}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || "default country"}
          </h4>

          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default Tour;
