import React from 'react'
import Footer from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import Global from '../styles/global'
import { Link } from 'gatsby'
import { lightTheme } from '../themes/lightTheme'
import { Seo } from './Seo'
import config from '../../config/SiteConfig'

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

interface LayoutProps {
  children?: any
  location?: any
}

export const Layout = (props: LayoutProps) => {
  const { children, location } = props
  const isRoot = location.pathname === '/'

  const header = (
    <>
      {isRoot ? <Seo isRoot={isRoot}/> : null}
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
    </>
  )

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        {header}
        {/* <GlobalStyle /> */}
        {children}
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
