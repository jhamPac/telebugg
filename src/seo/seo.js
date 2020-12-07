import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

export default function SEO(props) {
    const {
        site: { siteMetadata },
    } = useStaticQuery(query)

    return (
        <Helmet title={siteMetadata.title}>
            <meta name="description" content={siteMetadata.description} />
            <meta property="og:url" content={siteMetadata.url} />
            <meta property="og:title" content={siteMetadata.title} />
            <meta property="og:description" content={siteMetadata.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
            <meta name="twitter:title" content={siteMetadata.title} />
            <meta name="twitter:description" content={siteMetadata.description} />
        </Helmet>
    )
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                title
                description
                url
                twitterUsername
            }
        }
    }
`
