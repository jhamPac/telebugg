import * as React from 'react'
import styled from 'styled-components'

export default function Container(props) {
    return (
        <C>
            <Center>{props.children}</Center>
        </C>
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
