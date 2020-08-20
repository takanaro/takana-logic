import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const Title = styled.div`
  font-size: 32px;
`

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
  console.log(JSON.stringify(data))
  const post = data.contentfulEntryPost
  return (
    <Layout location={location}>
      <Title>{post.title}</Title>
      <div
      dangerouslySetInnerHTML={{ __html: post.content.childMarkdownRemark.html }}
    />
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
query Post {
  contentfulEntryPost(contentfulid: {eq: 1}) {
    id
    title
    contentfulid
    content {
      childMarkdownRemark {
        html
        excerpt(pruneLength: 10)
      }
    }
  }
  }
`