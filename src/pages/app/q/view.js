import * as React from 'react'
import { navigate } from 'gatsby'

export default function QView(props) {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        if (props.location.state === null) {
            setRedirect(true)
            navigate('/')
        }
    }, [props.location.state])

    return redirect ? null : (
        <div id="question-view">
            <div id="question-view">
                Question View under construction{' '}
                <span role="img" aria-label="emoji of construction sign">
                    🚧
                </span>
            </div>
        </div>
    )
}
