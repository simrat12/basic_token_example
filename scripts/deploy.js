const hre = require("hardhat");
require("@nomiclabs/hardhat-ethers");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with account:", deployer.address);

  const balance = await deployer.getBalance();
  console.log(
    "Account balance:",
    hre.ethers.utils.formatEther(balance)
  );

  const GulpToken = await hre.ethers.getContractFactory("GulpToken");
  
  // Get deployment transaction
  const deployTransaction = GulpToken.getDeployTransaction();

  // estimate the gas required to deploy the contract
  const estimatedGas = await deployer.estimateGas(deployTransaction);

  // estimate the gas price
  const gasPrice = await deployer.getGasPrice();

  console.log("Estimated Gas:", estimatedGas.toString());
  console.log("Gas Price:", hre.ethers.utils.formatUnits(gasPrice, "gwei"), "gwei");

  const greeter = await GulpToken.deploy({
    gasLimit: estimatedGas.add(estimatedGas.div(9)), // add 10% buffer
    gasPrice: gasPrice,
    nonce: 200,
  });

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

