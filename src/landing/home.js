import * as React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'

export default function Home() {
    return (
        <main id="landing-page">
            <HeroSection>
                <div>
                    <h1 className="headline">Ask, connect and learn</h1>
                </div>
                <HeroCopy>
                    <div className="copy">
                        <p style={{ fontSize: '18px' }}>
                            Welcome to telebugg, the friendly software engineering Q & A
                            website for the 21st century. Whether you are just beginning
                            or a seasoned vet, ask away and never fret.
                        </p>
                    </div>
                    <div className="button-group">
                        <button onClick={() => navigate('/app/p/view')}>
                            Ask a question
                        </button>
                        <button onClick={() => navigate('/app/top-questions')}>
                            View top questions
                        </button>
                    </div>
                </HeroCopy>
            </HeroSection>
            <FeatureSection>
                <div className="feature-box"></div>
                <div className="feature-box"></div>
                <div className="feature-box"></div>
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

            @media screen and (min-width: 769px) {
                margin-bottom: 8px;
            }
        }
    }
`

const FeatureSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
    }

    .feature-box {
        background: #6272a4;
        width: 250px;
        height: 250px;

        margin-bottom: 32px;

        @media screen and (min-width: 769px) {
            margin-right: 32px;
        }
    }
`

const QuoteSection = styled.div``
