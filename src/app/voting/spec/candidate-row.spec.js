import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CandidateRow from '../candidate-row'

// mocks
const mockContract = {
    getTotalVotes: name => Promise.resolve(1),
    voteFor: name => Promise.resolve(true),
}

function testRender() {
    render(<CandidateRow contract={mockContract} name="alice" />)
}

describe('CandidateRow component', () => {
    test('candidate should have 1 vote', async () => {
        testRender()
        const voteText = await waitFor(() => screen.getByText(/alice has 1 votes/i))
        expect(voteText).toBeInTheDocument()
    })

    test('up vote should have been pressed', async () => {
        const spy = jest.spyOn(mockContract, 'voteFor')
        testRender()
        const voteButton = await waitFor(() =>
            screen.getByRole('button', { name: /vote/i })
        )

        await waitFor(() => userEvent.click(voteButton))

        expect(spy).toHaveBeenCalled()
    })
})
