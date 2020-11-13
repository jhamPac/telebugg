import * as React from 'react'
import styled from 'styled-components'

export default function Container(props) {
    return <C>{props.children}</C>
}

const C = styled.div`
    display: flex;
    flex-direction: row;
`
