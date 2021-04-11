import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import useContract from '@hooks/useContract'

import CandidateRow from './candidate-row'

export default function Voting(props: RouteComponentProps) {
    const [candidates, setCandidates] = React.useState<string[]>([])
    const [error, setError] = React.useState(false)
    const contract = useContract()

    const syncWithBlockchain = async () => {
        const [error, list] = await contract.getAllCandidates()
        console.log(list)

        if (error) {
            setError(error)
            return
        }

        setCandidates(list)
    }

    React.useEffect(() => {
        syncWithBlockchain()
    }, [])

    if (error) {
        return <div>Oops there was an error!</div>
    }

    return (
        <div style={{ paddingTop: '64px' }}>
            {candidates.length === 0 ? (
                <h2>Loading...</h2>
            ) : (
                candidates.map((cn, i) => (
                    <CandidateRow key={i} contract={contract} name={cn} />
                ))
            )}
        </div>
    )
}
