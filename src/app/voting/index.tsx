import * as React from 'react'
import Web3 from 'web3'
import { RouteComponentProps } from '@reach/router'

import useContract from '@hooks/useContract'

export default function Voting(props: RouteComponentProps) {
    const [contract, loading, error] = useContract()
    const [count, setCount] = React.useState(0)

    const getTotalVotesFromNetwork = async () => {
        const count = await contract.getTotalVotes('alice')
        setCount(count)
    }

    if (error) {
        return <h3>Error</h3>
    }

    React.useEffect(() => {
        getTotalVotesFromNetwork()
    }, [])

    return (
        <div>
            <h3>{`Alice has ${count} votes`}</h3>
        </div>
    )
}
