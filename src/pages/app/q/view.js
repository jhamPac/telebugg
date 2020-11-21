import * as React from 'react'
import { navigate } from 'gatsby'
import Container from '@layout/container'

export default function QView(props) {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        if (props.location.state === null) {
            setRedirect(true)
            navigate('/')
        }
    }, [props.location.state])

    return redirect ? null : (
        <Container>
            <div id="question-view">Question View</div>
        </Container>
    )
}
