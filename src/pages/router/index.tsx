import * as React from 'react'
import { Router } from '@reach/router'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

import ViewQuestion from '@app/view-question'
import AskQuestion from '@app/ask-question'
import Login from '@app/login'
import QuestionsFeed from '@app/questions-feed'
import Account from '@app/account/dashboard'
import Vote from '@app/voting'

import { useAuth } from '@hooks/auth'

const NoMatch = (props: RouteComponentProps) => {
    return (
        <div>
            <h1>LOST?</h1>
            <LinkBlock>
                <span> If you want to head back to the home page click</span>{' '}
                <Link to="/">
                    <h3>Here</h3>
                </Link>
            </LinkBlock>
            <LinkBlock>
                <span> If you want to post a question</span>{' '}
                <Link to="/router/p/view">
                    <h3>Here</h3>
                </Link>
            </LinkBlock>
        </div>
    )
}

const LinkBlock = styled.div`
    display: block;
    margin-bottom: 32px;

    a {
        text-decoration: none;

        h3 {
            display: inline-block;
        }
    }

    a:visited {
        color: #ff5555;
    }
`

type RouteGuardProps = RouteComponentProps & {
    component: React.FunctionComponent<any>
}

const ProtectRoute = ({ component: Component, location, ...rest }: RouteGuardProps) => {
    const { isLoggedIn } = useAuth()
    if (isLoggedIn === false && location?.pathname !== '/router/login') {
        navigate('/router/login', { state: { prevURL: location?.pathname } })
        return null
    }

    return <Component {...rest} />
}

const LoginCheck = ({ component: Component, location, ...rest }: RouteGuardProps) => {
    const { isLoggedIn } = useAuth()
    if (isLoggedIn === true && location?.pathname === '/router/login') {
        navigate('/router/account', { state: { prevURL: location?.pathname } })
        return null
    }

    return <Component {...rest} />
}

export default function R() {
    return (
        <Router basepath="/router">
            <QuestionsFeed path="/top-questions" />
            <ViewQuestion path="/q/view/:questionID" />
            <Account path="/account" />
            <Vote path="/vote" />
            <AskQuestion path="/p/view" />

            <LoginCheck path="/login" component={Login} />

            <NoMatch default />
        </Router>
    )
}
