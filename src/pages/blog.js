import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/Layout"
import StyledHero from "../components/utils/StyledHero"

const blog = props => {
  const img = props.data.file.childImageSharp.fluid
  return (
    <Layout>
      <StyledHero img={img}></StyledHero>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
