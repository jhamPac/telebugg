import * as React from 'react'

const AuthContext = React.createContext()

function AuthProvider(props) {
    let inMemoryToken = null

    const [isLoggedIn, setIsLoggedIn] = React.useState(inMemoryToken !== null)

    const saveToken = token => {
        inMemoryToken = token
        setIsLoggedIn(inMemoryToken !== null)
    }

    const getToken = () => inMemoryToken

    const value = {
        isLoggedIn,
        getToken,
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
