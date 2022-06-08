require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.WALLET_PRIVATEKEY, "https://rinkeby.infura.io/v3/"
        + process.env.INFURA_PROJECT_ID),
      network_id: 4, // Rinkeby’s id
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    },
  },
  mocha: {},
  compilers: {
    solc: { version: "^0.8.0" }
  },
};