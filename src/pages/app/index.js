import * as React from 'react'
import { Router } from '@reach/router'
import { Link, navigate } from 'gatsby'
import styled from 'styled-components'

import QuestionView from '@components/question/view'
import PostView from '@components/post/view'
import Login from '@components/login/login'
import TopQuestions from '@components/top-questions/topQuestions'

import useAuth from '@hooks/auth/useAuth'

const NoMatch = () => {
    return (
        <div>
            <h1>LOST?</h1>
            <StyledLink>
                <span> If you want to head back to the home page click</span>{' '}
                <Link to="/">
                    <h3>Here</h3>
                </Link>
            </StyledLink>
            <StyledLink>
                <span> If you want to post a question</span>{' '}
                <Link to="/app/p/view">
                    <h3>Here</h3>
                </Link>
            </StyledLink>
        </div>
    )
}

const StyledLink = styled(Link)`
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

const ProtectRoute = ({ component: Component, location, ...rest }) => {
    const [isLoggedIn] = useAuth()
    if (isLoggedIn === false && location.pathname !== '/app/login') {
        navigate('/app/login')
        return null
    }

    return <Component {...rest} />
}

export default function App(props) {
    return (
        <Router basepath="/app">
            <TopQuestions path="/top-questions" />
            <QuestionView path="/q/view/:questionID" />
            <ProtectRoute path="/p/view" component={PostView} />
            <Login path="/login" />
            <NoMatch default />
        </Router>
    )
}
