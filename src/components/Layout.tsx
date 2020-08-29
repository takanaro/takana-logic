import React from 'react'
import Footer from './Footer'
import styled, { ThemeProvider } from 'styled-components'
import Global from '../styles/global'
import { Link } from 'gatsby'
import { lightTheme } from '../themes/lightTheme'

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

export default ({ children }: { children: any }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        {/* <GlobalStyle /> */}
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
    </ThemeProvider>
  )
}
