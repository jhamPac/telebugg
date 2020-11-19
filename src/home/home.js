import * as React from 'react'
import styled from 'styled-components'
import Question from './question'
import codeSnippet from '../static/codepreview.gif'

const data = [
    {
        id: '4892742',
        user: {
            name: 'coderXYZ',
        },
        title:
            'What is the best approach to desiging a initial state from a server for React formik?',
        creation_date: '11/18/20',
        creation_time: '17:30',
        code_gif: codeSnippet,
    },
    {
        id: '1213987',
        user: {
            name: 'sushee',
        },
        title:
            'Wonder why is render faster when I invoke this function as opposed to the one in the library?',
        creation_date: '11/18/20',
        creation_time: '13:47',
        code_gif: codeSnippet,
    },
    {
        id: '54458934',
        user: {
            name: 'errorLover',
        },
        title: 'Can someone explain how this if else is the same as this ternary?',
        creation_date: '11/17/20',
        creation_time: '11:05',
        code_gif: codeSnippet,
    },
    {
        id: '9098763',
        user: {
            name: 'jhamPac',
        },
        title: 'What makes telebugg so cool?',
        creation_date: '11/17/20',
        creation_time: '09:39',
        code_gif: codeSnippet,
    },
]

export default function Home() {
    return (
        <H>
            <ControlContainer>
                <div>
                    <button>Post a question</button>
                </div>
                <div>
                    <button>Newest</button>
                    <button>Trending</button>
                    <button>Month</button>
                </div>
            </ControlContainer>
            <QuestionContainer>
                {data.map(d => (
                    <Question key={d.id} question={d} />
                ))}
            </QuestionContainer>
        </H>
    )
}

const H = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ControlContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 32px;
    margin-bottom: 64px;
    width: 100%;
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
