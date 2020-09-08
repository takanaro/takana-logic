import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import config from '../../config/SiteConfig'
import { Post } from '../models/Post'

interface SeoProps {
  isRoot?: boolean
  title?: string
  excerpt?: string
  pathname?: string
  publishdate?: string
}

export const Seo: React.FC<SeoProps> = ({
  isRoot,
  title,
  excerpt,
  pathname,
  publishdate,
}) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let description
  let image
  let postURL
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  if (isRoot) {
    title = config.siteTitle
    description = config.siteDescription
    image = config.siteBanner
  } else {
    description = excerpt
    image = config.siteBanner
    postURL = config.siteUrl + realPrefix + pathname
  }
  image = config.siteUrl + realPrefix + image
  const blogURL = config.siteUrl + config.pathPrefix
  let schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': blogURL,
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    },
  ]
  if (!isRoot) {
    schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        // @ts-ignore
        '@id': postURL,
        // @ts-ignore
        url: postURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description: config.siteDescription,
        datePublished: publishdate,
        dateModified: publishdate,
        author: {
          '@type': 'Person',
          name: config.author,
        },
        publisher: {
          '@type': 'Organization',
          name: config.author,
          logo: {
            '@type': 'ImageObject',
            url: config.siteUrl + realPrefix + config.siteLogo,
          },
        },
        isPartOf: blogURL,
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': blogURL,
        },
      },
    ]
  }
  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{config.siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      <meta property="og:locale" content={config.ogLanguage} />
      <meta
        property="og:site_name"
        content={config.ogSiteName ? config.ogSiteName : ''}
      />
      <meta property="og:url" content={!isRoot ? postURL : blogURL} />
      {!isRoot ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta
        property="fb:app_id"
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
