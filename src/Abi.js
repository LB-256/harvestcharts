import Web3 from 'web3';

export const web3 = new Web3(Web3.givenProvider || "wss://eth-mainnet.ws.alchemyapi.io/v2/nzZTij_2KAavafMTicQTL52SkxJf1Lkz")
const fwbtcaddress = '0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB';
const crvfwbtcaddress = '0x9aA8F427A17d6B0d91B6262989EdC7D45d6aEdf8';
const fdaiaddress = '0xab7fa2b2985bccfc13c6d86b1d5a17486ab1e04c';
const fusdcaddress = '0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE';
const fusdtaddress = '0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C';
const ftusdaddress = '0x7674622c63Bee7F46E86a4A5A18976693D54441b';
const frenbtcaddress = '0xC391d1b08c1403313B0c28D47202DFDA015633C4';
const fwethaddress = '0xFE09e53A81Fe2808bc493ea64319109B5bAa573e';

const fusdcwethaddress = '0xA79a083FDD87F73c2f983c5551EC974685D6bb36';
const fusdtwethaddress = '0x7DDc3ffF0612E75Ea5ddC0d6Bd4e268f70362Cff';
const fdaiwethaddress = '0x307E2752e8b8a9C29005001Be66B1c012CA9CDB7';
const fwbtcwethaddress = '0x01112a60f427205dcA6E229425306923c3Cc2073';
const fslpaddress = '0xF553E1f826f42716cDFe02bde5ee76b2a52fc7EB';

const proxyABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Invest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStrategy","type":"address"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"StrategyAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newStrategy","type":"address"},{"indexed":false,"internalType":"address","name":"oldStrategy","type":"address"}],"name":"StrategyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beneficiary","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_strategy","type":"address"}],"name":"announceStrategyUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"availableToInvestOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_strategy","type":"address"}],"name":"canUpdateStrategy","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"holder","type":"address"}],"name":"depositFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"doHardWork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalizeStrategyUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finalizeUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"futureStrategy","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"uint256","name":"_toInvestNumerator","type":"uint256"},{"internalType":"uint256","name":"_toInvestDenominator","type":"uint256"},{"internalType":"uint256","name":"_underlyingUnit","type":"uint256"},{"internalType":"uint256","name":"_implementationChangeDelay","type":"uint256"},{"internalType":"uint256","name":"_strategyChangeDelay","type":"uint256"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_storage","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_storage","type":"address"},{"internalType":"address","name":"_underlying","type":"address"},{"internalType":"uint256","name":"_toInvestNumerator","type":"uint256"},{"internalType":"uint256","name":"_toInvestDenominator","type":"uint256"}],"name":"initializeVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextImplementation","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextImplementationDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"nextImplementationTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"rebalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"impl","type":"address"}],"name":"scheduleUpgrade","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_store","type":"address"}],"name":"setStorage","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_strategy","type":"address"}],"name":"setStrategy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"},{"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"setVaultFractionToInvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"shouldUpgrade","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"strategy","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"strategyTimeLock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"strategyUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"underlying","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlyingBalanceInVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlyingBalanceWithInvestment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"underlyingBalanceWithInvestmentForHolder","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"underlyingUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vaultFractionToInvestDenominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vaultFractionToInvestNumerator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"numberOfShares","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];



const day = 86400000;

export const obj = [
  {title: 'fWETH', abi: proxyABI, add: fwethaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fDAI', abi: proxyABI, add: fdaiaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fUSDC', abi: proxyABI, add: fusdcaddress, decimals: '6', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fUSDT', abi: proxyABI, add: fusdtaddress, decimals: '6', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fTUSD', abi: proxyABI, add: ftusdaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1601997255000)/day))},
  {title: 'frenBTC', abi: proxyABI, add: frenbtcaddress, decimals: '8', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fWBTC', abi: proxyABI, add: fwbtcaddress, decimals: '8', maxHistory: parseInt(((Date.now() - 1603225580000)/day))},
  {title: 'fCRV:RENWBTC', abi: proxyABI, add: crvfwbtcaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1603228893000)/day))},   
  {title: 'fETH-DAI', abi: proxyABI, add: fdaiwethaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1602632151000)/day))},
  {title: 'fETH-USDC', abi: proxyABI, add: fusdcwethaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1602632151000)/day))},
  {title: 'fETH-USDT', abi: proxyABI, add: fusdtwethaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1602268539000)/day))},
  {title: 'fETH-WBTC', abi: proxyABI, add: fwbtcwethaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1602632151000)/day))},
  {title: 'fWBTC-TBTC', abi: proxyABI, add: fslpaddress, decimals: '18', maxHistory: parseInt(((Date.now() - 1602551221000)/day))}
  ];


export const times = [
    { key: 1, value: 24, text: "last 24h" },
    { key: 2, value: 3, text: "3d" },
    { key: 3, value: 5, text: "5d" },
    { key: 4, value: 7, text: "7d" },
    { key: 5, value: 'max', text: "MAX" },
   ];

export const ethblocksperday = 6530;
export const ethblocksperhour = 272;