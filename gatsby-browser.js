import * as React from 'react'
import Container from '@layout/container'
import Navbar from '@layout/navbar'

const wrapPageElement = ({ element, props }) => {
    return (
        <Container>
            <Navbar />
            {element}
        </Container>
    )
}

export { wrapPageElement }
