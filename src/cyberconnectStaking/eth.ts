import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as cyberconnectPoolAbi from '../abi/cyberconnectPool'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const CYBERCONNECT_POOL_ETH_ADDRESS = '0x59DC1ADe4f40a41e225eC03242bD41651521f943'.toLowerCase()
//const participatingAddresses: Set<string> = new Set(JSON.parse(fs.readFileSync('./assets/formData/wallets.json', 'utf8')))

const height = 19864533 // May-13-2024 11:59:59 PM +UTC

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 19657201, // Apr-15-2024 12:00:11 AM +UTC
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/ethereum-mainnet')
	.addLog({
		address: [CYBERCONNECT_POOL_ETH_ADDRESS],
		topic0: [cyberconnectPoolAbi.events.Deposit.topic],
		transaction: true
	})
	.setFields({
		log: {
			topics: true,
			data: true
		},
		transaction: {
			hash: true
		},
		block: {
			timestamp: true
		}
	})

const dbOptions = {
	tables: {
		TransfersTable: new Table(
			'cyberconnectStakersEthereum.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				to: Column(Types.String()),
//				amount: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/cyberconnectStakersEthereum'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			if (log.address===CYBERCONNECT_POOL_ETH_ADDRESS &&
					log.topics[0]===cyberconnectPoolAbi.events.Deposit.topic) {

				let { to, amount } = cyberconnectPoolAbi.events.Deposit.decode(log)

				ctx.store.TransfersTable.write({
//					txnHash: log.getTransaction().hash,
//					timestamp: block.header.timestamp,
					to: to.toLowerCase(),
//					amount: amount.toString()
				})
			}
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
