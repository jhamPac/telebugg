import * as React from 'react'
import styled from 'styled-components'
import Question from './question'
import { graphql, navigate, useStaticQuery } from 'gatsby'

export default function Home() {
    const { questions } = useStaticQuery(graphql`
        {
            questions: allTopQuestionsJson {
                edges {
                    node {
                        createDate
                        createTime
                        id
                        notes
                        src
                        title
                        user {
                            name
                        }
                    }
                }
            }
        }
    `)

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
                {questions.edges.map(({ node }) => (
                    <Question key={node.id} question={node} />
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
