import * as React from 'react'
import styled from 'styled-components'
import Container from '@layout/container'
import Navbar from '@layout/navbar'
import useMediaRecorder from '@media/useMediaRecorder'

export default function PView(props) {
    const { isRecording, recording, toggleRecording } = useMediaRecorder()
    return (
        <Container>
            <Navbar />
            <InputsContainer>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="description">Title</label>
                    <textarea id="description" name="title" />
                </div>
            </InputsContainer>
            <SRContainer>
                <div style={{ marginBottom: '32px' }}>
                    <button
                        onClick={toggleRecording}
                        style={{ display: 'inline-block', marginRight: '8px' }}
                    >
                        {isRecording ? 'Stop' : 'Start Recording'}
                    </button>
                    <button>Remove</button>
                </div>

                <VideoWrapper>
                    <Video>
                        {recording !== null ? (
                            <video
                                autoPlay
                                src={recording && window.URL.createObjectURL(recording)}
                            />
                        ) : null}
                    </Video>
                </VideoWrapper>
            </SRContainer>
        </Container>
    )
}

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 60%;
    }

    input,
    textarea {
        display: inline-block;
    }

    input {
        margin-bottom: 64px;
    }

    label {
        display: block;
        margin-bottom: 8px;
    }
`

const SRContainer = styled.div`
    margin-top: 64px;
`

const VideoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 50px;
    width: 100%;
`

const Video = styled.div`
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
