module.exports = {
  siteMetadata: {
      title: `Gatsby Wp`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "http://learning-gatsby.test/graphql"
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
        }
      `,
      ref: "id",
      index: ["title","content"],
      store: ["id", "slug", "date", "title","content"],
      normalizer: ({ data }) =>
        data.allWpNews.nodes.map(node => ({
          id: node.id,
          slug: node.slug,
          title: node.title,
          content: node.content,
          date: node.date,
        })),
    },
  },
  ]
};