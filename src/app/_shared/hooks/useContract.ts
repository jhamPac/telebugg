import * as React from 'react'
import Web3 from 'web3'
import { useStaticQuery, graphql } from 'gatsby'

const web3 = new Web3('http://127.0.0.1:7545')

interface VoteContract {
    getTotalVotes: (name: string) => Promise<any>
}

export default function useContract(): [VoteContract, boolean, boolean] {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const { allContractJson } = useStaticQuery(
        graphql`
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
    )

    const contract = new web3.eth.Contract(
        allContractJson.nodes[0].abi,
        '0xC12722dA98A3856171385995244864d0cD065143'
    )

    const c = {
        getTotalVotes: async (name: string): Promise<any> => {
            setLoading(true)
            try {
                const result = await contract.methods
                    .totalVotesFor(Web3.utils.fromAscii(name))
                    .call()
                setLoading(false)
                return result
            } catch (error) {
                setLoading(false)
                setError(true)
                return 0
            }
        },
    }

    return [c, loading, error]
}
