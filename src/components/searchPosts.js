import React, { useState } from "react"
import { Link } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import * as queryString from "query-string"


const SearchedPosts = ({ results }) =>
	results.length > 0 ? (
		results.map(node => {
			const date = node.date
			const title = node.title || node.slug
			const slug = node.slug

			return (
				<div key={slug}>
					<h3>
						<Link style={{ boxShadow: `none` }} to={`/blog${node.slug}`}>
							{title}
						</Link>
					</h3>
					<p dangerouslySetInnerHTML={{ __html: node.content }}></p>
					<p>{date}</p>
				</div>
			)
		})
	) : (
		<p style={{ textAlign: "center" }}>
			Sorry, couldn't find any posts matching this search.
		</p>
	)

const AllPosts = ({ posts }) => (
	<div style={{ margin: "20px 0 40px" }}>
		{posts.map(({ node }) => {
			const title = node.title || node.slug
			return (
				<div key={node.slug}>
					<h3>
						<Link style={{ boxShadow: `none` }} to={`/blog${node.slug}`}>
							{title}
						</Link>
					</h3>
					<p dangerouslySetInnerHTML={{ __html: node.content }}></p>
				</div>
			)
		})}
	</div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
	const { search } = queryString.parse(location.search)
	const [query, setQuery] = useState(search || "")
	const [word, setWord] = useState("");

	const results = useFlexSearch(
		query,
		localSearchBlog.index,
		localSearchBlog.store
	)

	return (
		<>
				<input
					id="search"
					type="search"
					placeholder="Search all posts"
					value={query}
					onChange={e => {
						setWord(e.target.value);
						setQuery(e.target.value);
					}}
				/>
				<button onClick={() => window.location =`/blog?search=${word}`}>Click</button>
			{query ? <SearchedPosts results={results} /> : <AllPosts posts={posts} />}
		</>
	)
}

export default SearchPosts