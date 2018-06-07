import React from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    height: 60vh;
`

export default () => (
    <Container>
        <Logo src="https://cdn.svgporn.com/logos/git-icon.svg" />
    </Container>
)
