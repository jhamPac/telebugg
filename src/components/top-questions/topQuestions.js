import * as React from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { navigate } from 'gatsby'
import { GET_TOP_QUESTIONS } from './queries'

import Question from './question'

export default function TopQuestions(props) {
    const { loading, error, data } = useQuery(GET_TOP_QUESTIONS, {
        fetchPolicy: 'no-cache',
    })

    if (error) {
        return (
            <div>
                Oops looks like there was an error. Return <Link to="/">home</Link>
            </div>
        )
    }

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div id="home-view">
            <ButtonsContainer>
                <div>
                    <button onClick={e => navigate('/app/p/view')}>Ask a question</button>
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
