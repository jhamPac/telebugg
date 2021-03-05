import { graphql } from 'gatsby'

const GET_QUESTION = graphql`
    query QuestionByID($id: ID!) {
        question: questionByID(id: $id) {
            title
            src
            notes
        }
    }
`

export { GET_QUESTION }
