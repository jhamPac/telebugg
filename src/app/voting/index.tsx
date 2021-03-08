import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import useContract from '@hooks/useContract'

import CandidateRow from './candidate-row'

const CANDIDATES_NAMES = ['alice', 'bob', 'eve'] // where does this come from??

export default function Voting(props: RouteComponentProps) {
    const contract = useContract()
    return (
        <div style={{ paddingTop: '64px' }}>
            {CANDIDATES_NAMES.map(cn => (
                <CandidateRow contract={contract} name={cn} />
            ))}
        </div>
    )
}
