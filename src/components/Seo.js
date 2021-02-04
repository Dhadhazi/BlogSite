import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title, description, meta = [] }) {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            description
            title
            twitter
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `webiste`,
        },
        {
          property: `twitter:title`,
          content: `webiste`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.twitter || ``,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
      ].concat(meta)}
    />
  );
}

export default Seo;
