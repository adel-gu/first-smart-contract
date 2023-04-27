const ethers = require('ethers');
const fs = require('fs-extra');
require('dotenv').config();

// Deploy smart contract
const main = async () => {
  // Set provider.
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  // choose a wallet.
  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const encryptedJson = fs.readFileSync('./.encryptedkey.json');
  let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.PRIVATE_KEY_PASSOWRD,
  );
  wallet = await wallet.connect(provider);
  // get smart contract abi
  const abi = fs.readFileSync(
    './build/SimpleStorage_sol_SimpleStorage.abi',
    'utf8',
  );
  // get smart contract binary code
  const binary = fs.readFileSync(
    './build/SimpleStorage_sol_SimpleStorage.bin',
    'utf8',
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log('Deploying, please wait...');
  // Deploy contract
  const contract = await contractFactory.deploy();

  // Get favoriteNumber value
  const currentFavoriteNumber = await contract.retrieve();
  console.log(`Current favorite number is:${currentFavoriteNumber.toString()}`);
  // update favoriteNumber value
  const transactionResponse = await contract.store('7');
  const txReciept = await transactionResponse.wait(1);
  const updatedFavoriteNumber = await contract.retrieve();
  console.log(`Updated favorite number is:${updatedFavoriteNumber.toString()}`);
};

// Invoke main()
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
