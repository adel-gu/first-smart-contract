const ethers = require('ethers');
const fs = require('fs-extra');
require('dotenv').config();

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSOWRD,
    process.env.PRIVATE_KEY,
  );
  fs.writeFileSync('./.encryptedkey.json', encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
