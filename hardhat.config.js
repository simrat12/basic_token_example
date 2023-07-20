require("@nomiclabs/hardhat-waffle");
require('hardhat-deploy');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  networks: {
    goerli: {
      url: "...", // replace with your Infura Project ID
      accounts: ['...'], // replace with your private key
      chainId: 5,
      saveDeployments: true,
      // gas: 2100000,
      // gasPrice: 35000000000,
    }
  },
  etherscan: {
    apiKey: {
      goerli: "MY65SQDZKVVA5YZBAYKAQVWSCG6FRKSFTJ" // Don't abuse this plz
    }
  },
  solidity: "0.8.17",
};
