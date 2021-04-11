import * as React from 'react'
import { render, screen } from '@testing-library/react'

import Footer from '../footer'

describe('Footer component', () => {
    it('should render with a 4 digit year in the copyright', () => {
        render(<Footer></Footer>)
        const copyright = screen.getByText(/^[0-9]{4}\stelebugg$/i)
        expect(copyright).toBeInTheDocument()
    })
})
