import React from "react"
import {graphql} from "gatsby"

import SearchPosts from "../components/searchPosts"

class Blog extends React.Component {
	render() {
		const { data, navigate, location } = this.props
		const posts = data.allWpNews.edges
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

export default Blog

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
	}
`