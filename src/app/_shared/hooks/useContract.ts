import * as React from 'react'
import Web3 from 'web3'
import { useStaticQuery, graphql } from 'gatsby'

const web3 = new Web3('http://localhost:8545')

interface VoteContract {
    getTotalVotes: (name: string) => Promise<any>
    voteFor: (name: string) => Promise<boolean>
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

        voteFor: async (name: string): Promise<boolean> => {
            try {
                const tx = await contract.methods.voteForCandidate(
                    Web3.utils.fromAscii(name)
                )

                const createTx = await web3.eth.accounts.signTransaction(
                    {
                        from: '0x9a1b9f951e61fD34ce9414D0eba09b4C76750e6E', // this would normally be from the browser wallet
                        to: contract.options.address,
                        data: tx.encodeABI(),
                        gas: await tx.estimateGas(),
                    },
                    '0x53382a69ea87df06afe7338256891d965b626278515cde11d3be7c5546e61376'
                )

                await web3.eth.sendSignedTransaction(createTx.rawTransaction as string)

                return true
            } catch (error) {
                return false
            }
        },
    }

    return c
}
