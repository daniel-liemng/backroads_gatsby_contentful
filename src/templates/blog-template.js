import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import styles from "../css/single-blog.module.css"

import Layout from "../components/layout/Layout"

const BlogTemplate = ({ data }) => {
  const {
    title,
    published,
    text: { json },
  } = data.post

  // console.log(json)

  // options for render in RichText - JSON
  const options = {
    renderNode: {
      // for image
      "embedded-asset-block": node => {
        const postImage = node.data.target.fields.file["en-US"].url

        return (
          <div className="rich">
            <h3>an awesome image</h3>
            <img src={postImage} width="400" alt="post" />
            <p>images provided by john doe</p>
          </div>
        )
      },
      // for other post
      "embedded-entry-block": node => {
        const { image, title, text } = node.data.target.fields

        console.log(text)

        return (
          <div className="rich">
            <h1>{title["en-US"]}</h1>
            <img
              src={image["en-US"].fields.file["en-US"].url}
              alt="other post"
            />
            <article>{documentToReactComponents(text["en-US"])}</article>
          </div>
        )
      },
    },
  }

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published at : {published}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "dddd MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default BlogTemplate
