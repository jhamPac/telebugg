import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default function Question({ question }) {
    return (
        <Box>
            <div>
                <h4>{question.title}</h4>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '0',
                    paddingBottom: '75%',
                    position: 'relative',
                }}
            >
                <iframe
                    title="question-iframe"
                    src={question.src}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute' }}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <p style={{ marginBottom: '0px' }}>{`user: ${question.user.email}`}</p>
                <p>{`posted: ${question.createDate} @ ${question.createTime}`}</p>
            </div>
            <div>
                <Link to={`/app/q/view/${question.id}`}>
                    <button style={{ cursor: 'pointer' }}>view</button>
                </Link>
            </div>
        </Box>
    )
}

const Box = styled.div`
    border: solid #f8f8f2 2px;
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
