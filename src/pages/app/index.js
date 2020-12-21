import * as React from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'
import styled from 'styled-components'

import QuestionView from '@components/question/view'
import PostView from '@components/post/view'
import Login from '@components/login/login'
import TopQuestions from '@components/top-questions/topQuestions'

const NoMatch = () => {
    return (
        <div>
            <h1>LOST?</h1>
            <StyledLink>
                <span> If you want to head back to the home page click</span>{' '}
                <Link to="/">Here</Link>
            </StyledLink>
            <StyledLink>
                <span> If you want to post a question</span>{' '}
                <Link to="/app/p/view">Here</Link>
            </StyledLink>
        </div>
    )
}

const StyledLink = styled(Link)`
    display: block;
    margin-bottom: 32px;

    a {
        text-decoration: none;
    }
    a:visited {
        color: #f1fa8c;
    }
`

export default function App(props) {
    return (
        <Router basepath="/app">
            <TopQuestions path="/top-questions" />
            <QuestionView path="/q/view/:questionID" />
            <PostView path="/p/view" />
            <Login path="/login" />
            <NoMatch default />
        </Router>
    )
}
