const ADDRESSES = require('../helper/coreAssets.json')
const { sumTokens2 } = require('../helper/unwrapLPs')

const COLLATERAL_ADDRESS = ADDRESSES.ethereum.STETH; // stETH
const ACTIVE_POOL_ADDRESS = "0x6dBDB6D420c110290431E863A1A978AE53F69ebC";
const COLL_SURPLUSS_POOL = "0x335982DaE827049d35f09D5ec927De2bc38df3De";

async function tvl(api) {
    return sumTokens2({ api, owners: [ACTIVE_POOL_ADDRESS, COLL_SURPLUSS_POOL], tokens: [COLLATERAL_ADDRESS] })
  }
  
  module.exports = {
    timetravel: true,
    misrepresentedTokens: false,
    methodology: 'Adds the total amount of collateral in the active pool and the collateral surplus pool of the eBTC protocol.',
    start: '2024-03-15',
    ethereum: {
      tvl,
    }
  }; 
