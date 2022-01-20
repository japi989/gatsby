module.exports = {
  siteMetadata: {
      title: `Gatsby Wp`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://learning-gatsby.test/graphql",
      type: {
      MediaItem: {
        exclude: true,
      },
    },
    }
  },
  "gatsby-plugin-sass",
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: "gatsby-plugin-local-search",
    options: {
      name: "blog",
      engine: "flexsearch",
      engineOptions: {
        encode: "icase",
        tokenize: "forward",
        async: false,
      },
      query: `
          {
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
      `,
      ref: "id",
      index: ["title","content"],
      store: ["id", "slug", "date", "title","content"],
      normalizer: ({ data }) => {
         
      const allItems = data.allWpNews.nodes.concat(data.allWpArticles.nodes, data.allWpPage.nodes, data.allWpPost.nodes);

        return  allItems.map(node => ({
          id: node.id,
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
        }))}
    },
  },
  ]
};