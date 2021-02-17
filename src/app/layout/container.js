import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

/**
 * Hex color used
 *
 * background-white: #f8f8f2
 * most fonts: 	#282a36
 * accent purple: #bd93f9
 * secondary red: #ff5555
 *
 *
 */

const GlobalStyle = createGlobalStyle`
    html {
        background: #f8f8f2;
        
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
    color: #282a36;
    padding: 15px;
`

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100%;
    max-width: 1200px;
`
