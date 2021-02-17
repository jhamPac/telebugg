import * as React from 'react'
import Container from '@app/layout/container'
import Navbar from '@app/layout/navbar'
import SEO from '@app/seo/seo'
import Footer from '@app/layout/footer'

import { wrapRootElement } from './src/apollo/wrap-root-element'

const wrapPageElement = ({ element, props }) => {
    return (
        <Container>
            <SEO />
            <Navbar />
            {element}
            <Footer />
        </Container>
    )
}

export { wrapRootElement, wrapPageElement }
