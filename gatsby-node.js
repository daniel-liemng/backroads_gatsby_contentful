const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const { data } = await graphql(`
  {
    tours:allContentfulTour {
      nodes {
        slug
      }
    },
    posts:allContentfulPost {
      nodes {
        slug
      }
    }
  }
  `);

  // tours
  data.tours.nodes.forEach(({ slug }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: slug,
      },
    });
  });

  // posts
  data.posts.nodes.forEach(({ slug }) => {
    createPage({
      path: `blog/${slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: slug,
      },
    });
  });
};
