import * as React from 'react'
import styled from 'styled-components'

export default function Main() {
    return (
        <main id="landing-page">
            <HeroSection>
                <div>
                    <h1>
                        The <span style={{ color: '#f1fa8c' }}>FRIENDLY</span> software
                        engineering Q & A website for the 21st century
                    </h1>
                </div>
                <HeroCopy>
                    <div className="copy">
                        <p style={{ fontSize: '18px' }}>
                            Ask a question using screen recordings, code and connect live
                            with video chat all on one platform.
                        </p>
                    </div>
                    <div className="button-group">
                        <button>Ask a question</button>
                        <button>View top questions</button>
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
`

const HeroCopy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
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
        background: blue;
        width: 250px;
        height: 250px;
        margin-bottom: 32px;
    }
`

const QuoteSection = styled.div``
