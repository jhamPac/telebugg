import * as React from 'react'
import styled from 'styled-components'
import Question from './question'

import { navigate } from 'gatsby'

const data = [
    {
        id: '4892742',
        user: {
            name: 'coderXYZ',
        },
        title:
            'What is the best approach to desiging a initial state from a server for React formik?',
        notes: 'React v16.10, speaks Mandarin',
        createDate: '11/18/20',
        createTime: '17:30',
        src: 'https://giphy.com/embed/8wkYBm16JtsjVNqKeH',
    },
    {
        id: '1213987',
        user: {
            name: 'sushee',
        },
        title: 'Need to just copy over part of slice.',
        notes: 'New to JavaScript, I do have a background in PHP',
        createDate: '11/18/20',
        createTime: '13:47',
        src: 'https://giphy.com/embed/hm3Y0N0X5ZiVBrccRN',
    },
    {
        id: '54458934',
        user: {
            name: 'errorLover',
        },
        title: 'How do you filter by background calls, sorry english is not so good.',
        notes: 'Hindi navtive speaker',
        createDate: '11/17/20',
        createTime: '11:05',
        src: 'https://giphy.com/embed/JUcnk9GErfkIkKtAns',
    },
    {
        id: '9098763',
        user: {
            name: 'jhamPac',
        },
        title:
            'How do you align the heights of wrapper containers around images? Should I even use an img tag?',
        notes: 'open to any framework or ideas',
        createDate: '11/17/20',
        createTime: '09:39',
        src: 'https://giphy.com/embed/PC1NRqW1OLhVH0MAna',
    },
]

export default function Home() {
    return (
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
                {data.map(d => (
                    <Question key={d.id} question={d} />
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
