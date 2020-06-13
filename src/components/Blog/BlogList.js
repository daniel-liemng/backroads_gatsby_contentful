import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "../../css/blog.module.css";

import Title from "../utils/Title";
import BlogCard from "./BlogCard";

const getPostsQuery = graphql`
{
  allPosts:allContentfulPost(sort: {fields: published, order: ASC}) {
    nodes {
      title
      slug
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      published(formatString: "MMMM Do, YYYY")
      id: contentful_id
    }
  }
}
`;

const BlogList = () => {
  const { allPosts: {nodes: posts} } = useStaticQuery(getPostsQuery);

  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="posts" />
      <div className={styles.center}>
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
