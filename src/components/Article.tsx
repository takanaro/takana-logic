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

interface ArticleProps {
  slug?: any
  title: any
  date: any
  content?: any
  thumbnail?: any
}

const Article: React.FC<ArticleProps> = ({
  slug,
  title,
  date,
  content,
  thumbnail,
}) => {
  const Thumbnail = thumbnail == null ? null : <Img alt="" fluid={thumbnail.fluid} />
  const postLink = 'articles/' + slug

  return (
    <Post>
      <Link to={postLink}>
        <Title>{title}</Title>
      </Link>
      <p>{content}</p>
      <p>公開日：{date}</p>
    </Post>
  )
}

export { Article }
