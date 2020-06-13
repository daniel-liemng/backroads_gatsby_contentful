import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../../css/items.module.css"

import Tour from "../Tours/Tour"
import Title from "../utils/Title"

const getToursQuery = graphql`
  {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      nodes {
        price
        name
        days
        slug
        country
        contentful_id
        images {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const {
    featuredTours: { nodes: tours },
  } = useStaticQuery(getToursQuery)
  // console.log(tours)

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(tour => (
          <Tour key={tour.contentful_id} tour={tour} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
