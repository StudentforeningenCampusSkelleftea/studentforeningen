import React from "react"
import { Helmet } from "react-helmet" 
import styled from "styled-components"

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
`

export default ({ children }) => (
    <div>
        <Helmet>
            <title>Studentföreningen</title>
        </Helmet>
        <h1>Studentföreningen</h1>
        <Container>
            {children()}
        </Container>
    </div>
)