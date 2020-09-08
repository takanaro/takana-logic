/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// dotファイルから環境変数を取得
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// JS上でtsファイルを読み込むために必要
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
});

const config = require('./config/SiteConfig').default;
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    title: config.siteTitle
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-lodash`,
  ],
}
