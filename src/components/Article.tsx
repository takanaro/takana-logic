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
  slug?: Number
  title: string
  date: string
  content: any
  thumbnail?: any
}

const Title = styled.div`
  font-size: 30px;
`

const Article: React.FC<Props> = ({ slug, title, date, content, thumbnail }) => {
  const Thumbnail =
    thumbnail == null ? null : <Img alt="" fluid={thumbnail.fluid} />

   const a = "1"

  return (
    <Post>
      <Link to={String(slug)}>
        <Title>{title}</Title>
      </Link>
        <p>{content}</p>
        <p>公開日：{date}</p>
    </Post>
  )
}

export { Article }
