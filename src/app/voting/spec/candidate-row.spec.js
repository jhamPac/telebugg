import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import CandidateRow from '../candidate-row'

// mocks
jest.mock('@hooks/useContract', () => ({
    __esModule: true,
    default: () => ({
        getTotalVotes: name => Promise.resolve(1),
    }),
}))

describe('CandidateRow component', () => {
    test('candidate should have 1 vote', async () => {
        render(<CandidateRow name="alice" />)
        const voteText = await waitFor(() => screen.getByText(/alice has 1 votes/i))
        expect(voteText).toBeInTheDocument()
    })
})
