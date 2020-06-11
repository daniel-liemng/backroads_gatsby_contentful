import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Info = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data
        }
      }
    }
  `)
  console.log(data)

  const { author } = data.site.siteMetadata
  return <div>{author}</div>
}

export default Info
