const { ethers, run, network } = require('hardhat');
require('dotenv').config();

// Deploy contract
async function main() {
  const simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
  console.log('Deploying contract please wait...');
  const simpleStorage = await simpleStorageFactory.deploy();
  // Verify the smart contract
  if (
    network.config.chainId === 11155111 &&
    `${process.env.ETH_SCAN_API_KEY}`
  ) {
    await simpleStorage.deployTransaction.wait(6);
    verify(simpleStorage.address, []);
  }

  // Interact with the smart contract
  // Retrieve current favoriteNumber value
  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Favorite Number is: ${currentValue}`);

  // Update Current value
  const txResponse = await simpleStorage.store('7');
  await txResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Favorite Number is: ${updatedValue}`);
}

async function verify(contractAddress, args) {
  console.log('Verifying Contract please wait...');
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
