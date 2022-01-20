import React from "react"
import {graphql} from "gatsby"


import SearchPosts from "../components/searchPosts"
// styles
class IndexPage extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const posts = data.allWpNews.edges.concat(data.allWpArticles.edges, data.allWpPage.edges, data.allWpPost.edges)
    const localSearchBlog = data.localSearchBlog

    return (
      <>
      <SearchPosts
        posts={posts}
        localSearchBlog={localSearchBlog}
        navigate={navigate}
        location={location}
      />
      </>
    )
  }
}
export default IndexPage

export const pageQuery = graphql`
  query {
    localSearchBlog {
      index
      store
    }
    allWpNews {
      edges{
        node {
          content
          date
          slug
          title
        }
      }
    }
    allWpArticles {
      edges {
        node {
          date
          id
          title
          slug
          content
        }
      }
    }
    allWpPost {
      edges {
        node {
          date
          id
          title
          slug
          content
        }
      }
    }
    allWpPage {
      edges {
        node {
          date
          id
          title
          slug
          content
        }
      }
    }
  }
`
