module.exports = {
  siteMetadata: {
      title: `Gatsby Wp`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": " http://learning-gatsby.test/graphql"
    }
  }, "gatsby-plugin-sass"]
};