import React from "react"
import { Helmet } from "react-helmet" 
import styled from "styled-components"

import Link from "gatsby-link";

import favicon from "./favicon.ico"

const Container = styled.header`
`

const BrandLogo = styled.img`
    display: inline;
    margin: 1rem;
    max-height: 2rem;
`

const Content = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    max-width: 30rem;
    img {
        max-width: 100%;
    }
`

const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1rem" }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
)

export default ({ children, data }) => (
    <div>
        <Helmet>
            <link rel='shortcut icon' type='image/svg' href="https://cdn.svgporn.com/logos/git-icon.svg" />
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        <Container>
            <BrandLogo src="https://cdn.svgporn.com/logos/git.svg" />
            <ul style={{ float: "right" }}>
                <ListLink to="/">Link</ListLink>
            </ul>
        </Container>
        <Content>
            {children()}
        </Content>
    </div>
)

export const query = graphql`
    query IndexLayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`