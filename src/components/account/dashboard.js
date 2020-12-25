import * as React from 'react'
const cotterToken = require('cotter-token-js')

export default function Account(props) {
    let userEmail

    if (window !== undefined) {
        const s = window.localStorage.getItem('a_tk')

        if (s === null) {
            userEmail = 'unknown'
            return
        }

        const data = new cotterToken.CotterAccessToken(s)
        userEmail = data.payload.identifier
    }

    return <h3>{`Welcome ${userEmail}`}</h3>
}
