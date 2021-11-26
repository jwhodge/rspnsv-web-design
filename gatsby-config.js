module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "RSPNSV Web Design",
  },
  plugins: [
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
  ],
};
