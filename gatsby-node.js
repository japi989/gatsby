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
      allWpNews {
        nodes {
          date
          id
          title
          slug
          content
        }
      }
      allWpPost {
        nodes {
          date
          id
          title
          slug
          content
        }
      }
      allWpPage {
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

  // Templates
  const articleTemplate = path.resolve("./src/templates/template_article.js");
  const newsTemplate = path.resolve("./src/templates/template_news.js");
  const pageTemplate = path.resolve("./src/templates/template_page.js");
  const postTemplate = path.resolve("./src/templates/template_post.js");
  
  data.allWpArticles.nodes.map(node => {
    const slug = "/" +  node.slug + "/"
    actions.createPage({
      path: slug,
      component: slash(articleTemplate),
      context: { slug: node.slug },
    })
  })

  data.allWpNews.nodes.map(node => {
    const slug = "/" +  node.slug + "/"
    actions.createPage({
      path: slug,
      component: slash(newsTemplate),
      context: { slug: node.slug },
    })
  })

  data.allWpPost.nodes.map(node => {
    const slug = "/" +  node.slug + "/"
    actions.createPage({
      path: slug,
      component: slash(postTemplate),
      context: { slug: node.slug },
    })
  })

  data.allWpPage.nodes.map(node => {
    const slug = "/" +  node.slug + "/"
    actions.createPage({
      path: slug,
      component: slash(pageTemplate),
      context: { slug: node.slug },
    })
  })
}
