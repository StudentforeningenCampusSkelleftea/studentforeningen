module.exports = {
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-netlify-cms",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/blog`,
                name: "markdown-pages"
            }
        },
        "gatsby-transformer-remark",
    ]
}