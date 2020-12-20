import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        background: #282a36;
        
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f8f8f2;
    padding: 15px;
`

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    max-width: 1200px;
`
