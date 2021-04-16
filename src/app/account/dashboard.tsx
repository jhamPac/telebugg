import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import ipfs from 'ipfs-http-client'

export default function Account(props: RouteComponentProps): React.ReactElement {
    const client = ipfs()

    const getVersion = async () => {
        const v = await client.version()
        console.log('BAM')
    }

    React.useEffect(() => {
        getVersion()
    })

    return <div>under construction</div>
}
