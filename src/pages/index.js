import * as React from 'react'
import LandingPage from '@components/landing/home'

import { useAuth } from '@hooks/auth'

export default function Main() {
    const { isLoggedIn } = useAuth()
    console.log(isLoggedIn, 'INDEX MAIN')
    return <LandingPage />
}
