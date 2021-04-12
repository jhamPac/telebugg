import * as React from 'react'
import WaveDivider from '../wave-divider'
import { render, screen } from '@testing-library/react'

// mocks
jest.mock('gatsby')

describe('WaveDivider component', () => {
    test('position prop is reflected in the svg data attribute', () => {
        const { container } = render(<WaveDivider position="top-wave" />)
        const svg = container.querySelector('svg')
        expect(svg.dataset.name).toEqual('top-wave')
    })
})
