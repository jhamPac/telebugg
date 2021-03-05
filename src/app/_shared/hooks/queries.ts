import { graphql } from 'gatsby'

const GET_CONTRACT = graphql`
    query MyQuery {
        allContractJson {
            nodes {
                abi {
                    constant
                    inputs {
                        internalType
                        name
                        type
                    }
                    outputs {
                        internalType
                        name
                        type
                    }
                    name
                    payable
                    stateMutability
                    type
                }
            }
        }
    }
`

export { GET_CONTRACT }
