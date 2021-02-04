module.exports = {
  siteMetadata: {
    title: "A Blog Site",
    description: "This is a blog site",
    twitter: "someoneshandle",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
