module.exports = {
    siteMetadata: {
        title: "Studentföreningen",
    },
    plugins: [
        "gatsby-plugin-typography",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/pages`,
                name: "markdown-pages"
            }
        },
        "gatsby-transformer-remark",
    ],
}