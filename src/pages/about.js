import * as React from 'react'
import Container from '../layout/container'
import { Link } from 'gatsby'
import styled from 'styled-components'
import aboutVideo from '../../static/ax.mp4'

export default function About() {
    return (
        <Container>
            <Introduction>
                <Link to="/">
                    <h1 style={{ marginBottom: '50px' }}>
                        Telebugg{' '}
                        <span role="img" aria-label="emoji of a bug">
                            🐛
                        </span>
                    </h1>
                </Link>
                <h2>
                    The FRIENDLY software engineering Q & A website for the 21st century
                </h2>
            </Introduction>
            <Video>
                <VideoWrapper>
                    <video controls id="about-player" src={aboutVideo} type="video/mp4" />
                </VideoWrapper>
            </Video>
            <Team>
                <h2>Meet the team</h2>
                <Link to="/">
                    <h1 style={{ marginBottom: '50px' }}>
                        Telebugg{' '}
                        <span role="img" aria-label="emoji of a bug">
                            🐛
                        </span>
                    </h1>
                </Link>
            </Team>
        </Container>
    )
}

const Introduction = styled.div``

const Video = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 100%;
`

const VideoWrapper = styled.div`
    width: 100%;
    height: 400px;

    @media screen and (min-width: 769px) {
        height: 550px;
    }

    @media screen and (min-width: 1025px) {
        height: 650px;
    }

    @media screen and (min-width: 1201px) {
        height: 750px;
    }

    video {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const Team = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
