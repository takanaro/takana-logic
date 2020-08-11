import React, { Props } from "react"
import { PageProps, Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { Article } from "../components/Article"
import styled from "styled-components"

interface IFooProps extends React.ClassAttributes<BlogIndex> {
  bar: string;
}


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

// export default function IndexRoute(props: PageProps) {
const BlogIndex: React.FC<Props> = ({ location, data }) => {
  const slug = 'aaa'

  data.allContentfulEntryPost.edges.map(({node},index) => (
    console.log(node)
  ))

  return (
    <Layout location={location}>
      <div>Hello World!</div>
      <Link to={slug}>
        aaa
      </Link>

      <User
        // username={node.thumbnail.fluid}
        username="Takanaro"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />

      {data.allContentfulEntryPost.edges.map(({ node }, index) => (
        <Article
          title={node.title}
          date={node.publishDate}
          content={node.content.childMarkdownRemark.excerpt}
          thumbnail={node.thumbnail}
        />
        // <Post>
        //   <tr key={index}>
        //     <td>{index}</td>
        //     <td>{node.contentfulid}</td>
        //     <td>{node.title}</td>
        //     <td>{node.body.body}</td>
        //   </tr>
        //   <button>続きを見る</button>
        // </Post>
      ))}

    </Layout>
  )
}

export default BlogIndex


export const pageQuery = graphql`
  query IndexPage {
    allContentfulEntryPost(filter: {node_locale: {eq: "en-US"}}, sort: {fields: publishDate, order: DESC}) {
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
