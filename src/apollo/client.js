import fetch from 'cross-fetch'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://us-central1-telebugg.cloudfunctions.net/api-v1',
        fetch,
    }),
    cache: new InMemoryCache(),
})
