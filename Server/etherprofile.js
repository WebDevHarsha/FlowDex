const { ethers } = require("ethers");
const INFURA_ID = '2e5a0da3e5414031853859ca6715146d'
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/2e5a0da3e5414031853859ca6715146d`)

const address = '0x4B4d854a2D6CB9D5B36064B02b5BED58bf8df73c';
const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
}

main()

