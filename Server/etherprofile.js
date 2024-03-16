const { ethers } = require("ethers");
const INFURA_ID = '2e5a0da3e5414031853859ca6715146d'
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

const address = '0xF61048A80E72DD1Ac8Ef9af768be702605Dc506e';
const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

