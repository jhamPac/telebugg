// ethereum
import { ethers } from 'ethers'

const provider = new ethers.providers.InfuraProvider('homestead', {
    projectId: process.env.GATSBY_INFURA_ID,
    projectSecret: process.env.GATSBY_INFURA_S,
})

export default provider
