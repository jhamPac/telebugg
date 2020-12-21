import * as React from 'react'
import Cotter from 'cotter'
import styled from 'styled-components'

export default function Login(props) {
    const [payload, setPayload] = React.useState()
    const loginFormSetup = async () => {
        try {
            const cotter = new Cotter({
                ApiKeyID: process.env.GATSBY_COTTER_API,
                Styles: {
                    input_label: {
                        color: '#f8f8f2',
                        fontSize: 16,
                    },
                },
            })
            const response = await cotter.signInWithLink().showEmailForm()
            setPayload(response)
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        loginFormSetup()
    }, [])
    return (
        <div>
            {/* <Form id="cotter-form-container">
                <pre>{JSON.stringify(payload, null, 4)}</pre>
            </Form> */}
            <div>Coming Soon...</div>
        </div>
    )
}

const Form = styled.div`
    width: 300px;
    height: 300px;

    pre {
        margin-top: 0;
        margin-bottom: 0;
    }
`
