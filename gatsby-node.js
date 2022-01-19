const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)


exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
       allWpArticles {
          nodes {
            date
            id
            title
            slug
            content
          }
      }
    }
  `)

  const postTemplate = path.resolve("./src/templates/template.js");
  data.allWpArticles.nodes.map(node => {
    const slug = "/" +  node.slug + "/"
    actions.createPage({
      path: slug,
      component: slash(postTemplate),
      context: { slug: node.slug },
    })
  })
}
