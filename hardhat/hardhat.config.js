require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC = process.env.SEPOLIA_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC}`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 11155111,
    },
  },
  solidity: '0.8.18',
};
