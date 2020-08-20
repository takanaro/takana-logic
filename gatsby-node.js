const _ = require(`lodash`)
const path = require(`path`)

// onCreateNodeより後に実行される
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
  {
    allContentfulEntryPost {
      edges {
        node {
          contentfulid
        }
      }
    }
    }
      `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const PostTemplate = require.resolve('./src/templates/PostTemplate.tsx')

  result.data.allContentfulEntryPost.edges.forEach(element => {
    actions.createPage({
      path: `/${element.node.contentfulid}`,
      component: PostTemplate
    })
  });

  createPage({
    path: `/aaa`,
    component: PostTemplate
  })



}