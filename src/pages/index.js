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
                    <div>
                        <p>
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
        </main>
    )
}

const HeroSection = styled.div`
    margin-top: 32px;
`

const HeroCopy = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .button-group {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
