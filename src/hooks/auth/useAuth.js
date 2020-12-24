import * as React from 'react'

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const toggleLogin = () => setIsLoggedIn(loggedIn => !loggedIn)

    return [isLoggedIn, toggleLogin]
}
