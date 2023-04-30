require('@nomicfoundation/hardhat-toolbox');
require('./tasks/block-number');

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
    apiKey: `${ETH_SCAN_API_KEY}`,
  },
  solidity: '0.8.18',
};
