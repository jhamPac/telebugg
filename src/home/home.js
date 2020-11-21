import * as React from 'react'
import styled from 'styled-components'
import Question from './question'

// gif
import cp from '../../static/cp.gif'
import cp2 from '../../static/cp2.gif'
import cp3 from '../../static/cp3.gif'
import cp5 from '../../static/cp5.gif'
import { navigate } from 'gatsby'

const data = [
    {
        id: '4892742',
        user: {
            name: 'coderXYZ',
        },
        title:
            'What is the best approach to desiging a initial state from a server for React formik?',
        createDate: '11/18/20',
        createTime: '17:30',
        codePreview: cp,
    },
    {
        id: '1213987',
        user: {
            name: 'sushee',
        },
        title: 'Need to just copy over part of slice.',
        createDate: '11/18/20',
        createTime: '13:47',
        codePreview: cp2,
    },
    {
        id: '54458934',
        user: {
            name: 'errorLover',
        },
        title: 'How do you filter by background calls, sorry english is not so good.',
        createDate: '11/17/20',
        createTime: '11:05',
        codePreview: cp3,
    },
    {
        id: '9098763',
        user: {
            name: 'jhamPac',
        },
        title:
            'How do you align the heights of wrapper containers around images? Should I even use an img tag?',
        createDate: '11/17/20',
        createTime: '09:39',
        codePreview: cp5,
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
