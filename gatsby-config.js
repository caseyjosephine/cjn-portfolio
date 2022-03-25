module.exports = {
  siteMetadata: {
    title: `Casey Jo Noble 🍷 Wine Industry Designer & Developer`,
    siteUrl: `https://www.caseyjonoble.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      }
    },
  ],
}
