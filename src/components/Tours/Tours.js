import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import TourList from "./TourList"

const getToursQuery = graphql`
  {
    allTours: allContentfulTour {
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

const Tours = () => {
  const {
    allTours: { nodes: allTours },
  } = useStaticQuery(getToursQuery)

  return (
    <div>
      <TourList allTours={allTours} />
    </div>
  )
}

export default Tours
