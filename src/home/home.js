import * as React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'
import { navigate } from 'gatsby'

import Question from './question'

export default function Home(props) {
    const { loading, error, data } = useQuery(
        gql`
            {
                questions: topQuestions {
                    id
                    user {
                        name
                    }
                    title
                    notes
                    createDate
                    createTime
                    src
                }
            }
        `,
        { fetchPolicy: 'no-cache' }
    )

    if (error) {
        throw new Error('error with graphql')
    }

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div id="home-view">
            <ButtonsContainer>
                <div>
                    <button onClick={e => navigate('/app/p/view')}>
                        Post a question
                    </button>
                </div>
                <div>
                    <button>Newest</button>
                    <button>Trending</button>
                    <button>Month</button>
                </div>
            </ButtonsContainer>
            <QuestionsContainer>
                {data.questions.map(question => (
                    <Question key={question.id} question={question} />
                ))}
            </QuestionsContainer>
        </div>
    )
}

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 32px;
    margin-bottom: 64px;
    width: 100%;

    button {
        cursor: pointer;
    }
`

const QuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 569px) {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 769px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`
