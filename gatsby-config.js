require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
const path = require('path')

module.exports = {
    siteMetadata: {
        title: `telebugg`,
        description: `The FRIENDLY software engineering Q & A website for the 21st century.`,
        author: `jhamPac`,
        url: 'https://www.telebug.gg',
        twitterUsername: '@telebugg',
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `telebugg`,
                short_name: `telebugg`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/telebugg.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/util/typography`,
            },
        },
        {
            resolve: `gatsby-plugin-alias-imports`,
            options: {
                alias: {
                    '@layout': path.resolve(__dirname, 'src/layout'),
                    '@media': path.resolve(__dirname, 'src/media'),
                },
                extensions: ['js'],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
