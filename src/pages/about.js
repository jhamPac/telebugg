import * as React from 'react'
import Container from '../layout/container'
import styled from 'styled-components'

export default function About() {
    return (
        <Container>
            <AbouText>
                <h1>Telebugg 🐛</h1>
                <h2>
                    The FRIENDLY software engineering Q & A website for the 21st century
                </h2>
            </AbouText>
            <AboutVideo>
                <video width="640" height="360" id="player1" preload="none">
                    <source
                        type="video/youtube"
                        src="https://www.youtube.com/watch?v=haejb5rzKsM&feature=emb_logo&ab_channel=ITRevolution"
                    />
                </video>
            </AboutVideo>
        </Container>
    )
}

const AbouText = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen AND (min-width: 768px) {
        width: 75%;
    }
`

const AboutVideo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
