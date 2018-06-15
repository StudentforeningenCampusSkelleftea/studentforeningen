import React from "react"
import { Helmet } from "react-helmet"

import favicon from "./../../static/assets/logo2_white-1-.gif"

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <div>
            <Helmet>
                <title>{frontmatter.title}</title>
            </Helmet>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export const pageQuery = graphql`
    query SuborgByPath($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`