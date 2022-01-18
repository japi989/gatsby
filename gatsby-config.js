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
    resolve: 'gatsby-plugin-flexsearch',
    options: {
      languages: ['en'],
      type: 'MarkdownRemark',
      fields: [
        {
          name: 'title',
          indexed: true,
          resolver: 'frontmatter.title',
          attributes: {
            encode: 'balance',
            tokenize: 'strict',
            threshold: 6,
            depth: 3,
          },
          store: true,
        },
        {
          name: 'description',
          indexed: true,
          resolver: 'frontmatter.description',
          attributes: {
            encode: 'balance',
            tokenize: 'strict',
            threshold: 6,
            depth: 3,
          },
          store: false,
        },
        {
          name: 'url',
          indexed: false,
          resolver: 'fields.slug',
          store: true,
        },
      ],
    },
  },{
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://learning-gatsby.test/graphql",
      },
    },
  ]
};