import { gql } from '@apollo/client'

const GET_TOP_QUESTIONS = gql`
    {
        questions: topQuestions {
            id
            user {
                email
            }
            title
            notes
            createdAt
            src
        }
    }
`

export { GET_TOP_QUESTIONS }
