import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
  <div className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500">
    <div className="flex justify-center h-screen">
        <div className="m-auto">
          <div className="grid grid-cols-1 justify-center bg-white rounded-lg border-4 border-gray-600 shadow-photo p-2">
            {Posts}
            </div>
        </div>
    </div>
  </div>
    )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`