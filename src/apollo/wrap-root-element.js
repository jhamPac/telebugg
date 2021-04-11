import * as React from 'react'
import { ApolloProvider } from '@apollo/client'
import { client } from './client'
import { AuthProvider } from '@hooks/auth'

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>
        <AuthProvider>{element}</AuthProvider>
    </ApolloProvider>
)
