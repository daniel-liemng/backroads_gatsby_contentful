import React from "react";
import { graphql, StaticQuery } from "gatsby";

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data
      }
    }
  }
`;

const Try = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={(data) => {
        console.log(data);
        const {
site: {
            siteMetadata: { title, description },
          },
        } = data;

        return (
          <h1>
            {title}
            {description}
          </h1>
        );
      }}
    >
    </StaticQuery>
  );
};

export default Try;
