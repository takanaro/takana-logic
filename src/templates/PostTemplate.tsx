import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/Layout"

interface Props {
  pageContext: any,
  location: any,
  data: any
}

const PostTemplate: React.FC<Props> = ({
  pageContext,
  location,
  data
}) => {
  return (
    <Layout location={location}>
      <div>Hello World!</div>
    </Layout>
  )
}

export default PostTemplate
