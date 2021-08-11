import React from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import Bar from "../components/Bar"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  
  deckDeckGoHighlightElement()
  return (
    <div className="bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500">
        <div className="flex justify-center h-screen">
            <div className="m-auto">
            <div className="grid grid-cols-1 justify-center bg-white rounded-lg border-4 border-gray-600 shadow-photo p-2">
            <div className="blog-post-container">
                <div className="blog-post">
                <h1 className="px-2 font-sans text-gray-600 text-3xl text-center">{frontmatter.title}</h1>
                <h3 className="px-2 font-sans text-gray-500 text-md text-center">{frontmatter.date}</h3>
                <Bar/>
            <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`