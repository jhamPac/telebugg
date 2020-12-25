import * as React from 'react'
import Cotter from 'cotter'
import styled from 'styled-components'
import { navigate } from 'gatsby'

import { useAuth } from '@hooks/auth'
const cotterToken = require('cotter-token-js')

export default function Login(props) {
    const { isLoggedIn } = useAuth()

    return isLoggedIn ? <AlreadyLoggedIn {...props} /> : <ContinueLogin {...props} />
}

function AlreadyLoggedIn() {
    let userEmail
    if (window !== undefined) {
        const u = window.localStorage.getItem('a_tk')

        if (u === null) {
            userEmail = 'unknown'
            return
        }

        const data = new cotterToken.CotterAccessToken(u)
        userEmail = data.payload.identifier
    }

    return (
        <ContentWrapper>
            <div className="logged-in">
                <h3>{`You are already logged in as: ${userEmail}`}</h3>
                <p>asdfasd</p>
            </div>
        </ContentWrapper>
    )
}

function ContinueLogin(props) {
    const { saveToken } = useAuth()
    const [error, setError] = React.useState()

    const loginFormSetup = async () => {
        try {
            const cotter = new Cotter({
                ApiKeyID: process.env.GATSBY_COTTER_API,
                Styles: {
                    input_label: {
                        color: '#f8f8f2',
                        fontSize: 16,
                    },
                },
            })
            const response = await cotter.signInWithLink().showEmailForm()
            saveToken(response)
            setTimeout(() => {
                const redirectURL = props.location.state.prevURL ?? '/'
                navigate(redirectURL)
            }, 1500)
        } catch (err) {
            setError(true)
        }
    }

    React.useEffect(() => {
        loginFormSetup()
    }, [])

    // const t = window.localStorage.getItem('a_tk')
    // console.log(t)
    // console.log(new cotterToken.CotterAccessToken(t))

    return (
        <ContentWrapper>
            <Form id="cotter-form-container">
                <h3>We use magic links for account creation and logging in.</h3>
            </Form>
            {error ? (
                <p>An error has occured while attempting to login in, please try again</p>
            ) : null}
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 64px;

    .logged-in {
        width: 100%;
        height: 500px;

        @media screen and (min-width: 769px) {
            width: 75%;
        }
    }
`

const Form = styled.div`
    width: 300px;
    height: 500px;

    h3 {
        margin-bottom: 0;
    }
`
