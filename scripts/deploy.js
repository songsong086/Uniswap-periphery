
const hre = require("hardhat");
async function main() {
    let fa = await hre.ethers.getContractFactory("WETH9")
    let ct = await fa.deploy()
    await ct.deployed()
    console.log(ct.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()