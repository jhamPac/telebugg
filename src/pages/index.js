import * as React from 'react'
import Container from '../layout/container'
import Navbar from '../layout/navbar'
import Home from '../home/home'

export default function App() {
    return (
        <Container>
            <Navbar />
            <Home />
        </Container>
    )
}
