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

interface ContentProps {
  node: any
  location?: any
}

const Title = styled.div`
  font-size: 30px;
`

export const Content: React.FC<ContentProps> = ({ node }) => {
  return (
    <>
      <Seo isRoot={false} title={node.title} excerpt={node.content?.excerpt} pathname={location.pathname} publishdate={node.publishDate}/>
      <Title>{node.title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: String(node.content?.childMarkdownRemark?.html),
        }}
      />
    </>
  )
}
