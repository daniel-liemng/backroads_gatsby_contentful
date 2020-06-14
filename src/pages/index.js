import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import StyledHero from "../components/utils/StyledHero"
import Banner from "../components/utils/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import FeaturedTours from "../components/Home/FeaturedTours"

import SEO from "../components/layout/SEO"

const index = ({
  data: {
    file: {
      childImageSharp: { fluid: img },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" description="this is homepage" />
      <StyledHero img={img} home>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, magni."
        >
          <AniLink swipe to="/tours" className="btn-white">
            explore tours
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default index
