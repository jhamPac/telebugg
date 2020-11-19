import * as React from 'react'
import styled from 'styled-components'
import Question from './question'

export default function Home() {
    return (
        <HomeContainer>
            <div style={{ marginTop: '32px', marginBottom: '64px' }}>
                <button>Post a question</button>
            </div>
            <QuestionContainer>
                <Question />
                <Question />
                <Question />
                <Question />
            </QuestionContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const QuestionContainer = styled.div`
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
