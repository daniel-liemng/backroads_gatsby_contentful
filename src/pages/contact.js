import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"

import StyledHero from "../components/utils/StyledHero"
import Contact from "../components/Contact/Contact"

const contact = props => {
  const img = props.data.file.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero img={img}></StyledHero>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
