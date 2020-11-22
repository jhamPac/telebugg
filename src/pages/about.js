import * as React from 'react'
import Container from '../layout/container'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default function About() {
    return (
        <Container>
            <div>
                <Link to="/">
                    <h1 style={{ display: 'inline-block', marginBottom: '50px' }}>
                        Telebugg
                        <span role="img" aria-label="emoji of a bug">
                            🐛
                        </span>
                    </h1>
                </Link>
                <h2>
                    The FRIENDLY software engineering Q & A website for the 21st century
                </h2>
            </div>
            <VideoWrapper>
                <Video>
                    <iframe
                        src="https://www.youtube.com/embed/nhhfFR6SQRU"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </Video>
            </VideoWrapper>
            <Team>
                <h2>Meet the team</h2>
            </Team>
        </Container>
    )
}

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 100%;
`

const Video = styled.div`
    width: 100%;

    @media screen and (min-width: 769px) {
        height: 550px;
    }

    @media screen and (min-width: 1025px) {
        height: 650px;
    }

    @media screen and (min-width: 1201px) {
        height: 750px;
    }

    iframe {
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
