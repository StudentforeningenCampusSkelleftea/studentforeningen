import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default ({ data }) => {
    const { edges } = data.allMarkdownRemark

    return(
        <Container>
            {edges.map((object, i) => {
                const { fields, frontmatter } = object.node;

                return (
                    <Link to={fields.slug}>
                        <h1>{frontmatter.title}</h1>
                    </Link>
                )
            })}
        </Container>
    )
}

export const pageQuery = graphql`
    query SuborgAll {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`