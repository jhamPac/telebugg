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
                    <img src="https://i.pravatar.cc/64?img=3" />
                </Avatar>
            </UserBlock>
        </Row>
    )
}

const Row = styled.div`
    background: blue;
    width: 100%;
    margin-bottom: 32px;
`

const UserBlock = styled.div`
    background: white;
    width: 100%;
    height: 64px;
`

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    background: black;
`
