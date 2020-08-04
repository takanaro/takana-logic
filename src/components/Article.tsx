import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

const Post = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`

interface Props {
  title: string
  date: string
}

const Article: React.FC<Props> = ({
  title,
  date
}) => {
  return (
    <Post>
      {title}
      <p>公開日：{date}</p>
    </Post>
  )
}

export { Article }