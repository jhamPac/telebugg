import { gql } from '@apollo/client'

const GET_QUESTION = gql`
    query QuestionByID($id: ID!) {
        question: questionByID(id: $id) {
            title
            src
            notes
        }
    }
`

export { GET_QUESTION }
