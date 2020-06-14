import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import styles from "../css/blog.module.css"

import Layout from "../components/layout/Layout"
import Title from "../components/utils/Title"
import BlogCard from "../components/Blog/BlogCard"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const latestPosts = props.data.posts.nodes

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {latestPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, i) => (
            <AniLink
              fade
              key={i}
              to={i === 0 ? `/blogs` : `/blogs/${i + 1}`}
              className={
                i + 1 === currentPage
                  ? `${styles.link} ${styles.active}`
                  : `${styles.link}`
              }
            >
              {i + 1}
            </AniLink>
          ))}

          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      nodes {
        slug
        title
        id: contentful_id
        published(formatString: "MMMM Do, YYYY")
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default BlogListTemplate
