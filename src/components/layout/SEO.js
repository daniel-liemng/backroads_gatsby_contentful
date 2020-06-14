import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        image
        siteUrl
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteTitle, siteDesc, siteUrl, image, twitterUsername },
    },
  } = useStaticQuery(getData)

  return (
    <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
