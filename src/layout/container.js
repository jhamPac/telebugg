import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        background: #44475a;
    }
`

export default function Container(props) {
    return (
        <React.Fragment>
            <GlobalStyle />
            <C>
                <Center>{props.children}</Center>
            </C>
        </React.Fragment>
    )
}

const C = styled.div``

const Center = styled.div``
