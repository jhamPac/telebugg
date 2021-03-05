import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import useContract from '@hooks/useContract'

export default function Voting(props: RouteComponentProps) {
    const contract = useContract()
    const [count, setCount] = React.useState(0)

    const syncWithBlockchain = async () => {
        try {
            const count = await contract.getTotalVotes('alice')
            setCount(parseInt(count))
        } catch (error) {
            setCount(0)
        }
    }

    React.useEffect(() => {
        syncWithBlockchain()
    }, [])

    const voteHandler = async e => {
        const success = await contract.voteFor('alice')

        if (success) {
            setCount(count + 1)
        }
    }

    return (
        <div>
            <h3>{`Alice has ${count} votes`}</h3>
            <button style={{ cursor: 'pointer' }} onClick={voteHandler}>
                vote
            </button>
        </div>
    )
}
