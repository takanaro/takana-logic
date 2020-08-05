

// onCreateNodeより後に実行される
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  createPage({
    path: `/aaa`,
    component: require.resolve('./src/templates/PostTemplate.tsx')
  })
}