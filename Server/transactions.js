const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://sepolia.infura.io/v3/2e5a0da3e5414031853859ca6715146d");
const pvtKey = "a2918da365188fbb24f4acdc3fdaa548c422bc8f67d85dbfea48ba5bf2fdf2a1";
const wallet = new ethers.Wallet(pvtKey, provider);
const recadd = "0xF61048A80E72DD1Ac8Ef9af768be702605Dc506e";
const amntsend = new ethers.utils.parseEther("0.001");
async function sendEth() {
    try {
        const txn = await wallet.sendTransaction({
            to: recadd,
            value: amntsend
        });
        console.log("Transaction Hash: ", txn.hash);
        await txn.wait();
        console.log("Transaction is confirmed!");
    }
    catch (error) {
        console.error("Error sending ETH: ", error);
    }
}
sendEth();
