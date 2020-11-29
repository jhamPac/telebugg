import * as React from 'react'
import styled from 'styled-components'
import useMediaRecorder from '@media/useMediaRecorder'

export default function PView(props) {
    const { isRecording, recording, toggleRecording } = useMediaRecorder()
    return (
        <div id="post-view" style={{ height: '100vh' }}>
            <InputsContainer>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="description">Helpful notes</label>
                    <textarea id="description" name="title" style={{ height: '256px' }} />
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

                <Video>
                    {recording !== null ? (
                        <video
                            autoPlay
                            src={recording && window.URL.createObjectURL(recording)}
                        />
                    ) : null}
                </Video>
            </SRContainer>
        </div>
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
        width: 100%;
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

const Video = styled.div`
    width: 100%;

    video {
        object-fit: contain;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
            width: 640px;
            height: 360px;
        }
    }
`
