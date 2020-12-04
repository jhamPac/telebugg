import * as React from 'react'
import styled from 'styled-components'

export default function ReplyRow(props) {
    return (
        <Row>
            <p>
                As mentioned in the accepted answer, this error is usually caused when the
                API returns data in a format, say object, instead of in an array. If no
                existing answer here cuts it for you, you might want to convert the data
                you are dealing with into an array with something like:
            </p>
            <UserBlock>
                <Avatar>
                    <img src="https://i.pravatar.cc/64?img=3" alt="avatar" />
                    <p>user: coder123</p>
                </Avatar>
                <ReplyButtonGroup>
                    <div
                        style={{
                            height: '64px',
                            width: '64px',
                            background: 'green',
                            display: 'table',
                            textAlign: 'center',
                        }}
                    >
                        <p style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                            online
                        </p>
                    </div>
                    <div style={{ height: '64px', width: '64px', background: 'blue' }}>
                        <button
                            style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                        >
                            view
                        </button>
                    </div>
                    <div style={{ height: '64px', width: '64px', background: 'pink' }}>
                        <button
                            style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                        >
                            video chat
                        </button>
                    </div>
                </ReplyButtonGroup>
            </UserBlock>
        </Row>
    )
}

const Row = styled.div`
    width: 100%;
    margin-bottom: 128px;

    @media screen and (min-width: 769px) {
        margin-bottom: 64px;
    }
`

const UserBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 64px;

    button {
        font-size: 11px;

        @media screen and (min-width: 769px) {
            font-size: 14px;
        }
    }
`

const Avatar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;

    img {
        width: 64px;
        height: 64px;
    }

    p {
        margin-left: 8px;
    }
`

const ReplyButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    height: 64px;
    background: green;
`
