import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import useContract from '@hooks/useContract'

const CANDIDATES_NAMES = ['alice', 'bob', 'eve'] // where does this come from??

function CandidateRow(props: { name: string }) {
    const contract = useContract()
    const [count, setCount] = React.useState(0)

    const syncWithBlockchain = async () => {
        try {
            const count = await contract.getTotalVotes(props.name)
            setCount(count)
        } catch (error) {
            setCount(0)
        }
    }

    React.useEffect(() => {
        syncWithBlockchain()
    }, [])

    const voteHandler = async () => {
        const success = await contract.voteFor(props.name)

        if (success) {
            setCount(count + 1)
        }
    }
    return (
        <div style={{ marginBottom: '64px' }}>
            <h3>{`${props.name} has ${count} votes`}</h3>
            <button style={{ cursor: 'pointer' }} onClick={voteHandler}>
                vote
            </button>
        </div>
    )
}

export default function Voting(props: RouteComponentProps) {
    return (
        <div style={{ paddingTop: '64px' }}>
            {CANDIDATES_NAMES.map(cn => (
                <CandidateRow name={cn} />
            ))}
        </div>
    )
}
