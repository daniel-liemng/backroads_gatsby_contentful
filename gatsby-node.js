const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      tours: allContentfulTour {
        nodes {
          slug
        }
      }
      posts: allContentfulPost {
        nodes {
          slug
        }
      }
    }
  `)

  // tours
  data.tours.nodes.forEach(({ slug }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: slug,
      },
    })
  })

  // posts
  data.posts.nodes.forEach(({ slug }) => {
    createPage({
      path: `blog/${slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: slug,
      },
    })
  })

  // new posts with pagination
  // amount of posts
  const posts = data.posts.nodes

  // posts per page
  const postsPerPage = 5

  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  // Array of the number of pages
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: postsPerPage * i,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
