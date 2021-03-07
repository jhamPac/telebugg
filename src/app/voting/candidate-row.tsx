import * as React from 'react'
import useContract from '@hooks/useContract'

export default function CandidateRow(props: { name: string }) {
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
