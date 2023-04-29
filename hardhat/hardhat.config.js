require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC = process.env.SEPOLIA_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETH_SCAN_API_KEY = process.env.ETH_SCAN_API_KEY;

module.exports = {
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC}`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  etherscan: {
    apiKey: `BVR9QKVUT1T44PIZV4IHWA7B5IU8VY6F37`,
  },
  solidity: '0.8.18',
};
