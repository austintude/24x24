/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `24x24 Photo Marathon`,
    titleTemplate: `%s · A World-Wide Event `,
    author: {
      name: `Morten Rand-Hendriksen  `,
      summary: `a ballroom dancer and developer.`,
    },
    description: `Bringing the World Together`,
    url: `https://24x24photomarathon.com`,
    logo: `logo.png`,
    twitter: `24x24photo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-css-customs`,
    "gatsby-plugin-svgr",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
  ],
}
