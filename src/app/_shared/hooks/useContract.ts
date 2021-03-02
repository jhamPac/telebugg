import * as React from 'react'
import Web3 from 'web3'
import { useStaticQuery, graphql } from 'gatsby'

const web3 = new Web3('http://localhost:8545')

interface VoteContract {
    getTotalVotes: (name: string) => Promise<any>
}

export default function useContract(): [VoteContract, boolean, boolean] {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const accounts = async () => {
        const a = await web3.eth.getAccounts()
        console.log(a[0], 'the first account')
    }

    accounts()

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

    return [c, loading, error]
}
