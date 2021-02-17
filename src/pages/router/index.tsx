import * as React from 'react'
import { Router } from '@reach/router'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'
import { RouteComponentProps } from '@reach/router'

import QuestionView from '@app/question/view'
import PostView from '@app/post/view'
import Login from '@app/login/login'
import TopQuestions from '@app/top-questions/topQuestions'
import Account from '@app/account/dashboard'

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
            <TopQuestions path="/top-questions" />
            <QuestionView path="/q/view/:questionID" />
            <ProtectRoute path="/p/view" component={PostView} />
            <ProtectRoute path="/account" component={Account} />
            <LoginCheck path="/login" component={Login} />
            <NoMatch default />
        </Router>
    )
}
