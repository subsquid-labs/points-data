import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as erc721abi from './abi/erc721'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const MILADY_ADDRESS = '0x5Af0D9827E0c53E4799BB226655A1de152A425a5'.toLowerCase()
//const participatingAddresses: Set<string> = new Set(JSON.parse(fs.readFileSync('./assets/formData/wallets.json', 'utf8')))

const holdingPeriodStart = 19857379 // the start of May 13th UTC
const holdingPeriodEnd = 19864533 // the end of May 13th UTC

const processor = new EvmBatchProcessor()
  .setBlockRange({
    from: 13090020, // deployment of the Milady contract
    to: holdingPeriodEnd
  })
  .setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
  .addLog({
    address: [MILADY_ADDRESS],
    topic0: [erc721abi.events.Transfer.topic]
  })
  .setFields({
    log: {
      topics: true,
      data: true
    }
  })
	.includeAllBlocks()

const tokenHolders: Map<BigInt, string> = new Map()
const qualifiedTokenHolders: Set<string> = new Set()

let db = new Database({
	tables: {},
	dest: new LocalDest('./assets'),
	chunkSizeMb: Infinity
})

const outFileName = './assets/miladyHolders.csv'
fs.writeFileSync(outFileName, 'holder\n')

processor.run(db, async (ctx) => {
	for (let c of ctx.blocks) {
		for (let l of c.logs) {
			if (l.address === MILADY_ADDRESS && l.topics[0] === erc721abi.events.Transfer.topic) {
				let {from, to, tokenId} = erc721abi.events.Transfer.decode(l)
				const toAddr: string = to.toLowerCase()
				tokenHolders.set(tokenId, toAddr)
			}
		}
		if (c.header.height >= holdingPeriodStart && c.header.height <= holdingPeriodEnd) {
			for (let [token, holder] of tokenHolders.entries()) {
				qualifiedTokenHolders.add(holder)
			}
			if (c.header.height === holdingPeriodEnd) {
				fs.appendFileSync(outFileName, [...qualifiedTokenHolders].map(h => `${h}`).join('\n'))
			}
		}
	}
})
