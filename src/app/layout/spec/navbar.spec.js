import * as React from 'react'
import Navbar from '../navbar'
import { render, screen } from '@testing-library/react'

// mocks
import { useAuth } from '@hooks/auth'
jest.mock('@hooks/auth')

describe('Navbar component', () => {
    test('when user is logged in', () => {
        useAuth.mockImplementation(() => ({
            isLoggedIn: true,
            saveToken: () => {},
        }))
        render(<Navbar />)
        const accountText = screen.getByText(/account/i)
        expect(accountText).toBeInTheDocument()
    })

    test('when user is logged out', () => {
        useAuth.mockImplementation(() => ({
            isLoggedIn: false,
            saveToken: () => {},
        }))
        render(<Navbar />)
        const loginText = screen.getByText(/login/i)
        expect(loginText).toBeInTheDocument()
    })
})
