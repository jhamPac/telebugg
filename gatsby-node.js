exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    if (page.path.match(/^\/router/)) {
        page.matchPath = '/router/*'
        createPage(page)
    }
}
