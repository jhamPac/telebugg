import * as React from 'react'
import Home from '@components/landing/home'
import { render, screen } from '@testing-library/react'

describe('Landing page Home component', () => {
    it('should render', () => {
        render(<Home />)

        expect(true).toBe(true)
    })
})
