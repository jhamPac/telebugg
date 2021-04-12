import * as React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import WaveDivider from './wave-divider'
import AskSVG from '@assets/ask.svg'
import ConnectSVG from '@assets/vid-connect.svg'
import FollowersSVG from '@assets/followers.svg'

export default function Home(): React.ReactElement {
    return (
        <main id="landing-page">
            <HeroSection>
                <div>
                    <h1 className="headline">Ask, connect and learn</h1>
                </div>
                <HeroCopy>
                    <div className="copy">
                        <p style={{ fontSize: '18px' }}>
                            Welcome to telebugg, the{' '}
                            <span style={{ color: '#bd93f9' }}>FRIENDLY</span> software
                            engineering Q & A website for the 21st century. Whether you
                            are just beginning or a seasoned vet, ask away and never fret.
                        </p>
                    </div>
                    <div className="button-group">
                        <button onClick={() => navigate('/router/p/view')}>
                            Ask a question
                        </button>
                        <button onClick={() => navigate('/router/top-questions')}>
                            View top questions
                        </button>
                    </div>
                </HeroCopy>
            </HeroSection>

            <FeatureSection>
                <div className="feature-svg-container">
                    <AskSVG />
                </div>
                <div className="description">
                    <h2>Screen share and record</h2>
                    <p>
                        Software is hard, why ask a question using only text. Articulate
                        your question using screen shares, recordings and code.
                    </p>
                </div>
            </FeatureSection>

            <WaveDivider position="bottom-wave" />

            <QuoteSection>
                <h3>
                    I just wanted to create a place where anyone can ask a software
                    engineering question without having to worry about being scrutinized
                    or feeling like a "noob"
                </h3>
                <h4>
                    -{' '}
                    <a
                        href="https://twitter.com/keviaDotMe"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#bd93f9' }}
                    >
                        Kevia Cloud
                    </a>{' '}
                    -
                </h4>
            </QuoteSection>

            <WaveDivider position="top-wave" />

            <FeatureSection>
                <div className="description">
                    <h2>Answer back and connect</h2>
                    <p>
                        Why simply reply with a comment? If the original poster is online
                        connect via video chat and explain away.
                    </p>
                </div>
                <div className="feature-svg-container">
                    <ConnectSVG />
                </div>
            </FeatureSection>

            <WaveDivider position="bottom-wave" />

            <JoinCTA>
                <h3>Haven't joined yet?</h3>
                <button onClick={() => navigate('/router/login')}>Get started</button>
            </JoinCTA>

            <WaveDivider position="top-wave" />

            <FeatureSection>
                <div className="feature-svg-container">
                    <FollowersSVG />
                </div>
                <div className="description">
                    <h2>Prioritized questions</h2>
                    <p>
                        See questions from the people you connected with first on your
                        feed. Ask and answer questions from the users you built a
                        repertoire with.
                    </p>
                </div>
            </FeatureSection>
        </main>
    )
}

const HeroSection = styled.div`
    margin-top: 32px;
    margin-bottom: 64px;

    @media screen and (min-width: 769px) {
        text-align: center;
    }
`

const HeroCopy = styled.div`
    margin-top: 32px;

    p {
        margin-bottom: 32px;
    }

    @media screen and (min-width: 769px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .copy {
        @media screen and (min-width: 769px) {
            width: 60%;
        }
    }

    .button-group {
        button:first-child {
            margin-right: 8px;
            margin-bottom: 16px;

            @media screen and (min-width: 769px) {
                margin-bottom: 0px;
            }
        }

        button {
            cursor: pointer;
        }
    }
`

const FeatureSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    background: #50fa7b;

    .feature-svg-container {
        margin-bottom: 16px;

        @media screen and (min-width: 769px) {
            width: 50%;
        }

        svg {
            width: 100%;
            height: 256px;
        }
    }

    .description {
        @media screen and (min-width: 769px) {
            display: flex;
            flex-direction: column;
            justify-content: center;

            width: 40%;
        }
    }

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
    }
`

const QuoteSection = styled.div`
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;

    a {
        font-size: 20px;
    }
`

const JoinCTA = styled.div`
    margin-top: 64px;
    margin-bottom: 64px;
    text-align: center;

    button {
        cursor: pointer;
    }
`
