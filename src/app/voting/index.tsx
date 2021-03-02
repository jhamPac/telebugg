import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import useContract from '@hooks/useContract'

export default function Voting(props: RouteComponentProps) {
    const contract = useContract()
    const [count, setCount] = React.useState(0)

    const getTotalVotesFromNetwork = async () => {
        const count = await contract.getTotalVotes('alice')
        setCount(count)
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
