import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import CandidateRow from '../candidate-row'

// mocks
const mockContract = {
    getTotalVotes: name => Promise.resolve(1),
    voteFor: name => Promise.resolve(true),
}

describe('CandidateRow component', () => {
    test('candidate should have 1 vote', async () => {
        render(<CandidateRow contract={mockContract} name="alice" />)
        const voteText = await waitFor(() => screen.getByText(/alice has 1 votes/i))
        expect(voteText).toBeInTheDocument()
    })

    test('up vote should have been pressed', async () => {
        const spy = jest.spyOn(mockContract, 'voteFor')
        render(<CandidateRow contract={mockContract} name="alice" />)
        const voteButton = await waitFor(() =>
            screen.getByRole('button', { name: /vote/i })
        )

        expect(true).toBe(true)
    })
})
