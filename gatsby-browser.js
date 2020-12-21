import * as React from 'react'
import Container from '@components/layout/container'
import Navbar from '@components/layout/navbar'
import SEO from '@components/seo/seo'
import Footer from '@components/layout/footer'

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
