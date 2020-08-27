import React, { Props } from 'react'
import Footer from './Footer'
import styled from 'styled-components'
import Global from '../styles/global'
import { Link , PageProps} from 'gatsby'

const SiteTitle = styled.div`
  font-size: 3em;
  color: blue;
  &:hover {
    color: red;
  }
`

const SubTitle = styled.div`
  font-size: 1.5em;
  color: black;
`

const SubTitleWrapper = styled.div`
  background: yellow;
  opacity: 0.8;
`

const Header = styled.div`
  height: 200px;
  background: #fff;
  background-image: linear-gradient(
      90deg,
      rgba(77, 182, 172, 0.6) 50%,
      transparent 50%
    ),
    linear-gradient(#80cbc4 50%, transparent 50%);
  background-size: 30px 30px;
`

const Layout: React.FC<PageProps> = ({ location, children }) => {
  return (
    <>
      <Header>
        <Link to="/">
          <SiteTitle>たかなろじっく</SiteTitle>
        </Link>
        <SubTitleWrapper>
          <SubTitle>
            私生活で気になったこと、気になったものについて幅広く記事にします！
          </SubTitle>
        </SubTitleWrapper>
      </Header>
      {children}
      <Footer />
    </>
  )
}

export default Layout
