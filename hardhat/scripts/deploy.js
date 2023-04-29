const { ethers } = require('hardhat');

// Deploy contract
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
  console.log('Deploying contract please wait...');
  const simpleStorage = await simpleStorageFactory.deploy();
  console.log(simpleStorage.address);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
