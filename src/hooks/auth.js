import * as React from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const verifyToken = async token => {
        const body = {
            oauth_token: {
                access_token: token,
            },
        }

        const URL = 'https://worker.cotter.app/verify'

        try {
            const result = await fetch(URL, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'content-type': 'application/json',
                    API_KEY_ID: process.env.GATSBY_COTTER_API,
                },
                mode: 'cors',
                body: JSON.stringify(body),
            }).then(async resp => await resp.json())

            if (result.success === true) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        } catch (err) {
            setIsLoggedIn(false)
        }
    }

    React.useEffect(() => {
        if (window === undefined) {
            setIsLoggedIn(false)
            return
        }

        const token = window.localStorage.getItem('a_tk')

        if (token === null) {
            setIsLoggedIn(false)
            return
        }

        verifyToken(token)
    }, [])

    const saveToken = token => {
        if (window !== undefined) {
            window.localStorage.setItem('a_tk', token.oauth_token.access_token)
            setIsLoggedIn(true)
        }
    }

    const value = {
        isLoggedIn,
        saveToken,
    }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be a child of the AuthProvider')
    }
    return context
}

export { AuthProvider, useAuth }
