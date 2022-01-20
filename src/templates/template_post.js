import React from "react";
import { graphql } from "gatsby";

const postTemplate = ({ data }) => {
  return (
    <div className="container">
      <div>
        <h1>{data.wpPost.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.wpPost.content }}
        />
      </div>
    </div>
  );
};

export default postTemplate;

export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      id
      slug
      title
      content
    }
  }
`;
