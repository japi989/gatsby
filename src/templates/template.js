import React from "react"
import { graphql } from 'gatsby'


const postTemplate = ({ data }) => {
  return (
        <div className="container">
          <div>
            {data.wpArticles.title}
          </div>
        </div>
  )
}

export default postTemplate

export const query = graphql`
  query($slug: String!) {
    wpArticles(slug: { eq: $slug }){
      id
      slug
      title
    }
  }
`