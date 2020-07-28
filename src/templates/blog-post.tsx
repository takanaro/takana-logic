import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout"


const BlogPostTemplate = ({
  any: pageContext,
  any: location,
  any: data
}) => {
  return (
    <Layout location={location}>
      <div>Hello World!</div>
    </Layout>
  )
}

export default BlogPostTemplate
