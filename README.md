# Basic Token Deployment Guide

## Overview

This guide will walk you through the process of creating and deploying an Ethereum token using the Hardhat development environment. This simple repo fixes the issues surrounding gas price estimation and gas price estimation errors that are common when deploying contracts to the Ethereum network. The repo shows a basic contract which was a somewhat popular memecoin. This repo shows how to deploy a contract to the Goerli testnet, but can be easily modified to deploy to the Ethereum mainnet, or any other network. This guide gives a basic framework on how to fork any token and deploy it to the Ethereum network, when there are external interfaces involved. Please be responsible and safe when deploying contracts to the Ethereum network, rug pulls will not be tolerated.

## Prerequisites

- Node.js
- Yarn
- Windows Subsystem for Linux (WSL) or a Linux operating system

## Steps

1. **Clone the Repository**: 

    ```bash
    git clone https://github.com/simrat12/basic_token_example.git
    cd basic_token_example
    ```

2. **Install Dependencies**:

    ```bash
    yarn
    ```

3. **Set up Environment Variables**: 

    Update the `hardhat.config.js` file with your own values for the `INFURA_PROJECT_ID` and `METAMASK_PRIVATE_KEY` variables. These can be obtained from your [Infura](https://infura.io/) account and Metamask wallet respectively. A better practise is to encode these values as environment variables and then access them in the config file, but this is not necessary for this simple example.

4. **Compile the Contract**:

    ```bash
    npx hardhat compile
    ```

5. **Deploy the Contract**:

    ```bash
    npx hardhat run scripts/deploy.js --network goerli
    ```

6. **Verify the Contract on Etherscan**:

    After successful deployment, the contract's address will be printed on the console. You can use this address to verify your contract on Etherscan.

    ```bash
    npx hardhat verify --network goerli YOUR_CONTRACT_ADDRESS
    ```

## Troubleshooting

If you encounter any issues during the process, you may reach out to the project maintainer or consult the official Hardhat [documentation](https://hardhat.org/guides/).

