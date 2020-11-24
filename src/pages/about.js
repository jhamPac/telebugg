import * as React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <div id="about">
            <div>
                <h2>
                    The FRIENDLY software engineering Q & A website for the 21st century
                </h2>
            </div>
            <VideoWrapper>
                <Video>
                    <iframe
                        title="about-video"
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
        </div>
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
        width: 100%;
        height: 100%;
    }
`

const Team = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
