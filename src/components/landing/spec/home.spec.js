import * as React from 'react'
import Home from '@components/landing/home'
import { render, screen } from '@testing-library/react'
import { navigate } from 'gatsby'

// mocks
jest.mock('gatsby')

describe('Landing page Home component', () => {
    it('should render', () => {
        render(<Home />)
        const button = screen.getByRole('button', { name: 'Ask a question' })
        console.log(button)
        expect(true).toBe(true)
    })
})
