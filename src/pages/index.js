import * as React from 'react'
import useSR from '../mediarecorder/usescreenrecording'

export default function App() {
    const { isRecording, recording, toggleRecording } = useSR()
    console.log(isRecording)
    return <div>Telebugg</div>
}
