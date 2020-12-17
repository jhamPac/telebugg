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
            <AppContainer>
                <CenterContent>{props.children}</CenterContent>
            </AppContainer>
        </React.Fragment>
    )
}

const AppContainer = styled.div`
    color: #f8f8f2;
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: center;
    align-items: center;
`

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    max-width: 1200px;
`
