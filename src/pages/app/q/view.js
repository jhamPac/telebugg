import * as React from 'react'
import { navigate } from 'gatsby'

export default function QView(props) {
    const [redirect, setRedirect] = React.useState(false)

    React.useEffect(() => {
        if (props.location.state === null) {
            setRedirect(true)
            navigate('/')
        }
    }, [props.location.path])

    return redirect ? null : <div>Question View</div>
}
