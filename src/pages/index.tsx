import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Article } from '../components/Article'
import styled from 'styled-components'

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`

const Post = styled.div`
  color: purple;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

const BlogIndex: React.FC<PageProps> = ({ location, data }) => {
  data.allContentfulEntryPost.edges.map(({ node }, index) => console.log(node))

  return (
    <Layout location={location}>
      {data.allContentfulEntryPost.edges.map(({ node }, index) => (
        <Article
          slug={node.contentfulid}
          title={node.title}
          date={node.publishDate}
          content={node.content.childMarkdownRemark.excerpt}
          thumbnail={node.thumbnail}
        />
      ))}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexPage {
    allContentfulEntryPost(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: publishDate, order: DESC }
    ) {
      edges {
        node {
          id
          body {
            id
            body
          }
          publishDate
          contentfulid
          title
          content {
            childMarkdownRemark {
              excerpt(format: PLAIN)
              timeToRead
            }
          }
        }
      }
    }
  }
`
