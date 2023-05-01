require('@nomicfoundation/hardhat-toolbox');
require('./tasks/block-number');
require('hardhat-gas-reporter');

require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_RPC = process.env.SEPOLIA_RPC;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETH_SCAN_API_KEY = process.env.ETH_SCAN_API_KEY;
const COINMARKETCAP_KEY = process.env.COINMARKETCAP_KEY;

module.exports = {
  networks: {
    sepolia: {
      url: `${SEPOLIA_RPC}`,
      accounts: [`${PRIVATE_KEY}`],
      chainId: 11155111,
    },
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: `${ETH_SCAN_API_KEY}`,
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gas-report.md',
    noColors: true,
    currency: 'USD',
    coinmarketcap: `${COINMARKETCAP_KEY}`,
  },
  solidity: '0.8.18',
};
