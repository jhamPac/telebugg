import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import TelebuggSVG from '@assets/telebugg.svg'

export default function Navbar() {
    return (
        <N>
            <div>
                <TelebuggSVG />
                <Link to="/">
                    <h3>telebugg </h3>
                </Link>
            </div>
            <Link to="/about">
                <h3>about</h3>
            </Link>
        </N>
    )
}

const N = styled.nav`
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
