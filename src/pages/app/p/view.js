import * as React from 'react'
import styled from 'styled-components'
import Container from '@layout/container'
import Navbar from '@layout/navbar'

export default function PView(props) {
    return (
        <Container>
            <Navbar />
            <InputsContainer>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="description">Title</label>
                    <textarea id="description" name="title" />
                </div>
            </InputsContainer>
            <SRContainer>
                <button style={{ display: 'inline-block', marginRight: '8px' }}>
                    Record Screen
                </button>
                <button>Remove</button>
            </SRContainer>
        </Container>
    )
}

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media screen and (min-width: 768px) {
        width: 60%;
    }

    input,
    textarea {
        display: inline-block;
    }

    input {
        margin-bottom: 128px;
    }

    label {
        display: block;
        margin-bottom: 8px;
    }
`

const SRContainer = styled.div`
    margin-top: 128px;
`
