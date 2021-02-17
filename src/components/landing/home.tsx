import * as React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import AskSVG from '@assets/ask.svg'
import ConnectSVG from '@assets/vid-connect.svg'
import FollowersSVG from '@assets/followers.svg'

// ethereum
import { ethers } from 'ethers'

const provider = new ethers.providers.InfuraProvider('homestead', {
    projectId: process.env.GATSBY_INFURA_ID,
    projectSecret: process.env.GATSBY_INFURA_S,
})

export default function Home(): React.ReactElement {
    const consoleNetwork = async () => {
        const network = await provider.getNetwork()
        console.log(network)
    }

    React.useEffect(() => {
        consoleNetwork()
    }, [])

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
            <WaveDivider>
                <svg
                    data-name="bottom-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path
                        className="shape-fill"
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    ></path>
                </svg>
            </WaveDivider>
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
            <WaveDivider>
                <svg
                    data-name="top-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </WaveDivider>
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
            <WaveDivider>
                <svg
                    data-name="bottom-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </WaveDivider>
            <JoinCTA>
                <h3>Haven't joined yet?</h3>
                <button onClick={() => navigate('/router/login')}>Get started</button>
            </JoinCTA>
            <WaveDivider>
                <svg
                    data-name="top-wave"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </WaveDivider>
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

const WaveDivider = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    color: #50fa7b;
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
