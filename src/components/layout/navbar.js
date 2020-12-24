import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TelebuggSVG from '@assets/telebugg.svg'

import useAuth from '@hooks/auth/useAuth'

function Navbar(props) {
    const [isLoggedIn] = useAuth()
    return (
        <nav className={props.className}>
            <div>
                <TelebuggSVG />
                <Link to="/">
                    <h3>telebugg </h3>
                </Link>
            </div>
            <div>
                <Link to="/about">
                    <h3>about</h3>
                </Link>
                {isLoggedIn ? (
                    <Link to="/app/account">
                        <h3>account</h3>
                    </Link>
                ) : (
                    <Link to="/app/login">
                        <h3>login</h3>
                    </Link>
                )}
            </div>
        </nav>
    )
}

const StyledNavBar = styled(Navbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;

    div {
        h3 {
            display: inline-block;
            margin-left: 8px;
        }

        svg {
            width: 32px;
            height: 32px;
            vertical-align: middle;
        }
    }

    a {
        color: #282a36;
        text-decoration: none;
    }
`

export default StyledNavBar
