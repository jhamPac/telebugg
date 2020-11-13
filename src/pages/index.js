import * as React from 'react'
import useScreenRecorder from '../record/screen'

export default function App() {
    const { isRecording, recording, toggleRecording } = useScreenRecorder()
    return (
        <div>
            <h1>Telebugg</h1>
            <button onClick={toggleRecording}>
                {isRecording ? 'Stop' : 'Start Recording'}
            </button>
            {recording !== null ? (
                <video
                    autoPlay
                    src={recording && window.URL.createObjectURL(recording)}
                />
            ) : null}
        </div>
    )
}
