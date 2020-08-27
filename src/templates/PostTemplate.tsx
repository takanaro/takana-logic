import React from 'react'
import { PageProps, graphql , GatsbyLinkProps} from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { PostQuery } from '../../types/graphql-types'
import { Content } from '../components/Content'

const Title = styled.div`
  font-size: 32px;
`

interface IPostProps extends PageProps {
  data: PostQuery
}


const PostTemplate: React.FC<IPostProps> = ({ pageContext, location, data }) => {
  console.log(JSON.stringify(data))
  return (
    <Layout location={location}>
      <Content content={data?.contentfulEntryPost}/>
    </Layout>
  )
}

export default PostTemplate

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
