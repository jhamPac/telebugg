import * as React from 'react'
import Home from '@components/home'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { navigate } from 'gatsby'

// mocks
jest.mock('gatsby')

describe('Landing page Home component', () => {
    it('should render and simulate a click to another page', () => {
        render(<Home />)
        const button = screen.getByRole('button', { name: 'Ask a question' })
        userEvent.click(button)
        expect(navigate).toHaveBeenCalledWith('/router/p/view')
    })
})
