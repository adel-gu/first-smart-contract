const { ethers, run, network } = require('hardhat');
require('dotenv').config();

// Deploy contract
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
  console.log('Deploying contract please wait...');
  const simpleStorage = await simpleStorageFactory.deploy();
  console.log('Verifying Contract please wait...');
  if (network.config.chainId === 11155111 && process.env.ETH_SCAN_API_KEY) {
    await simpleStorage.deployTransaction.wait(6);
    verify(simpleStorage.address, []);
  }
}

async function verify(contractAddress, args) {
  console.log('Verify Contract...');
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArgsParams: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes('already verified')) {
      console.log('Already verified');
    } else {
      console.log(e);
    }
  }
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
