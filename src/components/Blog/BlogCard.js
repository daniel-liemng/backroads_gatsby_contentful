import React from "react";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import styles from "../../css/blog-card.module.css";

const BlogCard = ({ post }) => {
  const { title, slug, image, published } = post;
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Img fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade to={`/blog/${slug}`} className={styles.link}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>

      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default BlogCard;
