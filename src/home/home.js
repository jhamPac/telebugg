import * as React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/client'

import Question from './question'

export default function Home() {
    const { loading, error, data } = useQuery(gql`
        {
            message
        }
    `)

    if (error) {
        throw new Error('error from graphql')
    }

    console.log(data.message)
    return <div>K</div>
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
