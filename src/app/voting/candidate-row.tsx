import * as React from 'react'
import { iVoteContract } from '@hooks/useContract'

type Props = {
    name: string
    contract: iVoteContract
}

const CandidateRow: React.FC<Props> = (props: Props) => {
    const [count, setCount] = React.useState(0)

    const syncWithBlockchain = async () => {
        const [error, count] = await props.contract.getTotalVotes(props.name)

        if (error) {
            setCount(0)
        } else {
            setCount(count)
        }
    }

    React.useEffect(() => {
        syncWithBlockchain()
    }, [])

    const voteHandler = async () => {
        const success = await props.contract.voteFor(props.name)

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

export default CandidateRow
