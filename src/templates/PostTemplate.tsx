import React from 'react'
import { PageProps, graphql, GatsbyLinkProps } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { PostQuery } from '../../types/graphql-types'
import { Content } from '../components/Content'

const Title = styled.div`
  font-size: 32px;
`

interface IPostProps extends PageProps{
  data: PostQuery
}

export default (props: IPostProps) => {
  const {data, pageContext} = props;
  // console.log(JSON.stringify(data.contentfulEntryPost?.content?.childMarkdownRemark?.html))
  return (
    <Layout>
      <Content node={data.contentfulEntryPost}></Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($slug: Int) {
    contentfulEntryPost(contentfulid: { eq: $slug }) {
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
