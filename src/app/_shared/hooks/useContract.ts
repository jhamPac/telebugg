import * as React from 'react'
import Web3 from 'web3'
import { useStaticQuery, graphql } from 'gatsby'

const web3 = new Web3('http://localhost:8545')

interface VoteContract {
    getTotalVotes: (name: string) => Promise<any>
}

export default function useContract(): VoteContract {
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
        '0x807688a799cAaE52C9915C974F2CC78B0EfF2D9E'
    )

    const c = {
        getTotalVotes: async (name: string): Promise<any> => {
            try {
                const result = await contract.methods
                    .totalVotesFor(Web3.utils.fromAscii(name))
                    .call()

                return result
            } catch (error) {
                return 0
            }
        },
    }

    return c
}
