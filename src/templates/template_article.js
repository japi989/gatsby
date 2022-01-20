import React from "react";
import { graphql } from "gatsby";

const postTemplate = ({ data }) => {
  return (
    <div className="container">
      <div>
        <h1>{data.wpArticles.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.wpArticles.content }}
        />
      </div>
    </div>
  );
};

export default postTemplate;

export const query = graphql`
  query ($slug: String!) {
    wpArticles(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`;
