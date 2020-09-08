import { graphql, useStaticQuery } from 'gatsby'
import React, { Props } from 'react'

interface FooterProps {
  children?: any
  isRoot?: any
}

export const Footer: React.FC<FooterProps> = ({ isRoot }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <>aaa</>
}

export default Footer
