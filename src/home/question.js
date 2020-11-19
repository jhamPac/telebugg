import * as React from 'react'
import styled from 'styled-components'

export default function Question({ question }) {
    return (
        <Box>
            <div>
                <h4>{question.title}</h4>
            </div>
            <CodeSnippet>
                <img src={question.codePreview} alt="" />
            </CodeSnippet>
            <div>
                <p style={{ marginBottom: '0px' }}>{`user: ${question.user.name}`}</p>
                <p>{`posted: ${question.createDate} @ ${question.createTime}`}</p>
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
