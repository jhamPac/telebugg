import * as React from 'react'

export default function QView(props) {
    const [showRedirect, setShowRedirect] = React.useState(false)

    React.useEffect(() => {
        if (props.location.state === null) {
            setShowRedirect(true)
        }
    }, [props.location.path])

    return showRedirect ? <div>Go ask a question</div> : <div>blah</div>
}
