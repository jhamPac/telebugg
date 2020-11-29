import * as React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

import ReplyRow from './replyrow'

export default function QView(props) {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        // we can pass the question or fetch it here with the id
        if (props.location.state === null) {
            setRedirect(true)
            navigate('/')
        }
    }, [props.location.state])

    const renderPage = () => {
        const { question } = props.location.state
        return (
            <div id="question-view" style={{ paddingTop: '16px' }}>
                <h2>{question.title}</h2>
                <Video>
                    <iframe
                        title="question-iframe"
                        src={question.src}
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen
                    ></iframe>
                </Video>
                <Body>
                    <h3>Notes</h3>
                    <p>{question.notes}</p>
                </Body>
                <CodeBlock>
                    <h3>Code Block</h3>
                    <iframe
                        src="https://codesandbox.io/embed/happy-curie-ok3i4?fontsize=14&hidenavigation=1&theme=dark&view=editor"
                        style={{ width: '100%', height: '500px', overflow: 'hidden' }}
                        title="happy-curie-ok3i4"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </CodeBlock>
                <Replies>
                    <h2>Replies</h2>
                    <ReplyRow />
                    <ReplyRow />
                </Replies>
            </div>
        )
    }

    return redirect ? null : renderPage()
}

const Video = styled.div`
    margin-bottom: 8px;
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

const Body = styled.div`
    color: #f1fa8c;
    margin-bottom: 32px;

    p {
        font-size: 18px;
    }
`

const CodeBlock = styled.div`
    margin-top: 64px;
    margin-bottom: 64px;
`

const Replies = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;
`
