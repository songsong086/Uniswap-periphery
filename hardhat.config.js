require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.6.6",
  networks:{
    "goerli":{
      url:"https://goerli.infura.io/v3/0476813adafc4d26ab4d180619b1c9b8",
      accounts:["481ad3f5fbc80f513fb7ecb070c417664ab8c90694c1f7735aa4d093e66d0670"]
    }
  }
};