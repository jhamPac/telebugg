import * as React from 'react'
import { CotterAccessToken } from 'cotter-token-js'
import useLocalStorage from '@hooks/useLocalStorage'

export default function Account(): React.ReactElement | null {
    const [token] = useLocalStorage('a_tk')

    if (token === null) {
        return null
    }

    const data = new CotterAccessToken(token)
    const userEmail = data.payload.identifier

    return <h3>{`Welcome ${userEmail}`}</h3>
}
