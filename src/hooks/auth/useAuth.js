import * as React from 'react'

let inMemoryToken = null

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(inMemoryToken !== null)

    const saveToken = token => {
        inMemoryToken = token
        setIsLoggedIn(inMemoryToken !== null)
    }

    const getToken = () => inMemoryToken

    console.log(isLoggedIn, 'in auth')

    return {
        isLoggedIn,
        getToken,
        saveToken,
    }
}
