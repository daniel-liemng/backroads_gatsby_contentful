import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { FaMoneyBillWave, FaMap } from "react-icons/fa";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styles from "../css/template.module.css";

import Layout from "../components/layout/Layout";
import StyledHero from "../components/utils/StyledHero";
import Day from "../components/SingleTour/Day";

const TourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    start,
    description: {description},
    journey,
    images,
  } = data.singleTour;

  const [mainImg, ...tourImgs] = images;

  return (
    <Layout>
      <StyledHero img={mainImg.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImgs.map((item, index) => (
              <Img
                key={index}
                fluid={item.fluid}
                className={styles.image}
                alt="single-tour"
              />
            ))}
          </div>

          <h2>{name}</h2>

          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} /> starting from ${price}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>

          <h4>starts on : {start}</h4>
          <h4>duration : {days} days</h4>
          <p className={styles.desc}>
            {description}
          </p>
          <h2>daily schedule</h2>
          <div className={styles.journey}>
            {journey.map((item, index) =>
              <Day key={index} day={item.day} info={item.info} />
            )}
          </div>

          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!){
    singleTour:contentfulTour(slug: {eq: $slug}) {
      name
      price
      start(formatString: "dddd MMMM do, YYYY")
      days
      country
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

export default TourTemplate;
