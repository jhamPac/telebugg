import * as React from 'react'
import Container from '@layout/container'
import Navbar from '@layout/navbar'

import { wrapRootElement } from './src/apollo/wrap-root-element'

const wrapPageElement = ({ element, props }) => {
    return (
        <Container>
            <Navbar />
            {element}
        </Container>
    )
}

export { wrapRootElement, wrapPageElement }
