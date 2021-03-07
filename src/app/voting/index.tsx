import * as React from 'react'
import { RouteComponentProps } from '@reach/router'

import CandidateRow from './candidate-row'

const CANDIDATES_NAMES = ['alice', 'bob', 'eve'] // where does this come from??

export default function Voting(props: RouteComponentProps) {
    return (
        <div style={{ paddingTop: '64px' }}>
            {CANDIDATES_NAMES.map(cn => (
                <CandidateRow name={cn} />
            ))}
        </div>
    )
}
