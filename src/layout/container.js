import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        background: #44475a;
        
         button {
             background: #f8f8f2;
            -webkit-appearance: none;
            -webkit-border-radius: none;
        }
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

const C = styled.div`
    background: #44475a;
    color: #f8f8f2;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
`
