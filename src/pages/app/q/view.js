import * as React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import ReplyRow from './replyrow'

export default function QView({ questionID }) {
    const i = Number(questionID)
    const { loading, data } = useQuery(
        gql`
            query QuestionByID($id: Int!) {
                question: questionByID(id: $id) {
                    title
                    src
                    notes
                }
            }
        `,
        { variables: { id: i } }
    )

    console.log(data)

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div id="question-view" style={{ paddingTop: '16px' }}>
            <h2>{data.question.title}</h2>
            <Video>
                <iframe
                    title="question-iframe"
                    src={data.question.src}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
            </Video>
            <Body>
                <h3>Notes</h3>
                <p>{data.question.notes}</p>
            </Body>
            <Replies>
                <h2>Replies</h2>
                <ReplyRow />
                <ReplyRow />
            </Replies>
        </div>
    )
}

const Video = styled.div`
    margin-bottom: 8px;
    width: 100%;

    @media screen and (min-width: 769px) {
        height: 550px;
    }

    @media screen and (min-width: 1025px) {
        height: 650px;
    }

    @media screen and (min-width: 1201px) {
        height: 750px;
    }

    iframe {
        width: 100%;
        height: 100%;
    }
`

const Body = styled.div`
    color: #f1fa8c;
    margin-bottom: 64px;

    p {
        font-size: 18px;
    }
`

const Replies = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
`
