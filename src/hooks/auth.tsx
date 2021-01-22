import * as React from 'react'
import useLocalStorage from '@hooks/useLocalStorage'
import { VerifySuccess } from 'cotter/lib/binder'

const AuthContext = React.createContext({})

interface P {
    children: React.ReactNode
}

function AuthProvider(props: P) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const [token, saveTokenToLocal, removeTokenFromLocal] = useLocalStorage('a_tk')

    const verifyToken = async (token: string) => {
        const URL = 'https://worker.cotter.app/verify'
        const body = {
            oauth_token: {
                access_token: token,
            },
        }

        try {
            const result = await fetch(URL, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'content-type': 'application/json',
                    API_KEY_ID: `${process.env.GATSBY_COTTER_API}`,
                },
                mode: 'cors',
                body: JSON.stringify(body),
            }).then(async resp => await resp.json())

            if (result.success === true) {
                setIsLoggedIn(true)
            } else {
                removeTokenFromLocal()
                setIsLoggedIn(false)
            }
        } catch (err) {
            setIsLoggedIn(false)
        }
    }

    React.useEffect(() => {
        if (token === null) {
            setIsLoggedIn(false)
            return
        }

        verifyToken(token)
    }, [])

    const saveToken = (token: VerifySuccess) => {
        // go register the user in GCP
        // whether they exist or not
        // if not create the user and return success
        // if user exist just return success

        saveTokenToLocal(token.oauth_token.access_token)
        setIsLoggedIn(true)
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
