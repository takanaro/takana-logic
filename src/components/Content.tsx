import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Seo } from './Seo'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`
const ContentWrapper = styled.div`
  display: inline;
  alignitems: center;
`

interface ContentProps {
  node: any
  location?: any
}

const Title = styled.div`
  font-size: 30px;
`

export const Content: React.FC<ContentProps> = ({ node, location }) => {
  console.log(JSON.stringify(node.thumbnail.localFile.absolutePath))
  return (
    <ContentWrapper>
      <Seo
        isRoot={false}
        title={node.title}
        excerpt={node.content?.childMarkdownRemark?.excerpt}
        pathname={location.pathname}
        publishdate={node.publishDate}
        image={node.thumbnail.localFile.absolutePath}
      />
      <Title>{node.title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: String(node.content?.childMarkdownRemark?.html),
        }}
      />
    </ContentWrapper>
  )
}
