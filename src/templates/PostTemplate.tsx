import React from 'react'
import { PageProps, graphql, GatsbyLinkProps } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { PostQuery } from '../../types/graphql-types'
import { Content } from '../components/Content'

const Title = styled.div`
  font-size: 32px;
`

interface PostProps extends PageProps {
  data: PostQuery
}

export default (props: PostProps) => {
  const { data, location} = props
  // console.log(JSON.stringify(data.contentfulEntryPost?.content?.childMarkdownRemark?.html))
  return (
    <Layout {...props}>
      <Content node={data.contentfulEntryPost} location={location}></Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Post($slug: Int) {
    contentfulEntryPost(contentfulid: {eq: $slug}) {
      id
      title
      contentfulid
      content {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 120)
        }
      }
      publishDate(formatString: "YYYY-MM-DD")
    }
  }
`
