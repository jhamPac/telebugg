import * as React from 'react'
import styled from 'styled-components'
import codeSnippet from '../static/codepreview.gif'

export default function Question(props) {
    return (
        <Box>
            <div>
                <h4>
                    What is the best approach to desiging a initial state from a server
                    for React formik
                </h4>
            </div>
            <CodeSnippet>
                <img src={codeSnippet} />
            </CodeSnippet>
            <div>
                <p style={{ marginBottom: '0px' }}>user: coderxyz</p>
                <p>posted: 11/8/20 @ 17:30</p>
            </div>
            <div>
                <button>View</button>
            </div>
        </Box>
    )
}

const Box = styled.div`
    border: solid grey 1px;
    margin-bottom: 32px;
    width: 100%;
    padding: 16px;

    @media screen and (min-width: 569px) {
        width: 45%;
        margin-right: 4%;
    }

    @media screen and (min-width: 769px) {
        width: 30%;
        margin-right: 3%;
    }
`

const CodeSnippet = styled.div`
    img {
        object-fit: contain;
    }
`
