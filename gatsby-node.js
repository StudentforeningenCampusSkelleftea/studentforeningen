const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === "MarkdownRemark") {
        const slug = createFilePath({ node, getNode, basePath: "pages" })
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators

    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js")

    return Promise.resolve()
    .then(() => {
        return graphql(`
            {
                allMarkdownRemark(
                    filter: { frontmatter: { type: { eq: "blog" } } }
                    sort: { order: DESC, fields: [frontmatter___date] }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: blogPostTemplate,
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
        })
    })
    .then(() => {
        return graphql(`
            {
                allMarkdownRemark (
                    filter: { frontmatter: { type: { eq: "suborg" } } }
                    limit: 1000
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors)
            }
            let suborgTemplate = path.resolve("src/templates/suborg.js")
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: suborgTemplate,
                    context: {
                        slug: node.fields.slug
                    }
                })
            })
        })
    })
}