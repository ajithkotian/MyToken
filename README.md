# Table of Content

## What will this guide covers 
 - This guide weill deploy ERC20 token using the standard OpenZeppelin Contracts 
 - The token will be deployed to Rinkeby public test network
 - Some of the tools covered are : Truffle, Infura, Metamask

## Pre-requisites  
- Install below prerequisites 
  - Basic text editor Ex: VSCode, Atom
  - Chrome web browser
  - NodeJS v14+
  - Install metamask
  - Transfer 0.1 testnet ETH from rinkeby faucet https://rinkebyfaucet.com/ to your metamask wallet. Here is a good example : https://gist.github.com/tschubotz/8047d13a2d2ac8b2a9faa3a74970c7ef


## Steps
- Clone this repository: `git clone https://github.com/ajithkotian/MyToken.git`
- `cd MyToken`
- `npm init -y`
- `npm install`
- `npx truffle init`
  - Above command will prompt below 3 questions. Answer then `N`
  - ? Overwrite contracts? : `N`
  - ? Overwrite migrations? : `N`
  - ? Overwrite truffle-config.js? : `N`
- `npx truffle migrate --network rinkeby`
    - Mke a note of the contract address as shown below 
    - ![contract address](assets/img/Contract_address.png)

## Commands to interact with Deployed contract 
- `npx truffle console --network rinkeby`
- `token = await ERC20Token.deployed()`
- `await token.name()`
- `await token.symbol()`
- `(await token.totalSupply()).toString()`
- To exit the truffle console : `.exit`
- ![truffle console](/assets/img/Interact_truffle_console.jpg)

## Blockchain Explorer 
- https://rinkeby.etherscan.io/

## Add and Transfer tokens via Metamask wallet
- Click on Metamask icon at the top right corner of Chrome - under extensions 
- Choose `Rinkeby Test Network`
- Click `Import Tokens`
- Provide the deployed token contract address 
  - `Token Contract address : <CONTRACT_ADDRESS>`
  - `Token Symbol : UBST`
  - Click on `Add Custom Token`