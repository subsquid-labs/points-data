# Squids that gathered the data for SQD airdrop

Initial steps:

0. (optional) Manually update the block range at `./src/miladyHolders.ts`
1. Install Node deps and build everything: `npm i`, `npm run build`
2. Fetch the current archive heights: `node lib/retrieveArchiveHeights.js`

Most squids will not resume on halt, must be run all at once (~10 min).

## IceCreamSwap

1. `node lib/icecreamswap/pools.js`
2. `node lib/icecreamswap/swaps.js`

## Thena

1. `node lib/thena/pools.js`
2. `node lib/thena/swaps.js`

## Lido

`node -r dotenv/config lib/lidoStakers.js`

## GMX

`node -r dotenv/config lib/gmxPerpetuals.js`

## "Carry out transactions"

`node -r dotenv/config lib/neonTxs.js`
`node -r dotenv/config lib/coreTxs.js`
`node -r dotenv/config lib/merlinTxs.js`

## Cyberconnect

`node -r dotenv/config lib/cyberconnectStaking/optimism.js`
`node -r dotenv/config lib/cyberconnectStaking/bsc.js`
`node -r dotenv/config lib/cyberconnectStaking/eth.js`

## Milady

`node lib/miladyHolders.js`
