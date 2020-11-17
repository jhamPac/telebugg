import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default function Navbar() {
    return (
        <N>
            <Link to="/">
                <h3>
                    Telebugg <span role="img">🐛</span>
                </h3>
            </Link>
            <Link to="/about">
                <h3>About</h3>
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
`
