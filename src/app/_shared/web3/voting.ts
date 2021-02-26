import * as React from 'react'
import Web3 from 'web3'
import { useStaticQuery, graphql } from 'gatsby'

const web3 = new Web3('http://127.0.0.1:7545')

export default function useContract() {
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

    return { contract: contract }
}
