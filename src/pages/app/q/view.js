import * as React from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

export default function QView(props) {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        if (props.location.state === null) {
            setRedirect(true)
            navigate('/')
        }
    }, [props.location.state])

    const renderPage = () => {
        const { question } = props.location.state
        return (
            <div id="question-view" style={{ height: '100vh', paddingTop: '16px' }}>
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
                <div>
                    <h3>Replies</h3>
                </div>
            </div>
        )
    }

    return redirect ? null : renderPage()
}

const Video = styled.div`
    margin-bottom: 64px;
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
