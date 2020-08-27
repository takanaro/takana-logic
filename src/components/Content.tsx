import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`

interface Props {
  content?: any
}

const Title = styled.div`
  font-size: 30px;
`

const Content: React.FC<Props> = ({
  content
}) => {
  return (
    <>
      <Title>{content.title}</Title>
      <div
        dangerouslySetInnerHTML={{
          __html: String(
            content.childMarkdownRemark?.html
          ),
        }}
      />
    </>
  )
}

export { Content }
