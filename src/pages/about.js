import * as React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <div id="about">
            <div>
                <h2>
                    The <span style={{ color: '#bd93f9' }}>FRIENDLY</span> software
                    engineering Q & A website for the 21st century
                </h2>
            </div>
            <VideoWrapper>
                <Video>
                    <iframe
                        title="about-video"
                        src="https://player.vimeo.com/video/494269141"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Video>
            </VideoWrapper>
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
