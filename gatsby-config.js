module.exports = {
  siteMetadata: {
    title: "Gatsby Practice",
    warning: "warning: remove this from gatsby-config",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
  ],
}
