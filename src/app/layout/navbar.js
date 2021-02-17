import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TelebuggSVG from '@assets/telebugg.svg'

import { useAuth } from '@hooks/auth'

function Navbar(props) {
    const { isLoggedIn } = useAuth()

    return (
        <nav className={props.className}>
            <div className="left-nav-items">
                <TelebuggSVG />
                <Link to="/">
                    <h3>telebugg </h3>
                </Link>
            </div>
            <div className="right-nav-items">
                <Link to="/about">
                    <h3>about</h3>
                </Link>
                {isLoggedIn ? (
                    <Link to="/router/account">
                        <h3>account</h3>
                    </Link>
                ) : (
                    <Link to="/router/login">
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

    h3 {
        display: inline-block;
    }

    .left-nav-items {
        h3 {
            margin-left: 8px;
        }

        svg {
            width: 32px;
            height: 32px;
            vertical-align: middle;
        }
    }

    .right-nav-items {
        a:first-child {
            margin-right: 16px;
        }
    }

    a {
        color: #282a36;
        text-decoration: none;
    }
`

export default StyledNavBar
