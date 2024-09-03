import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as cyberconnectPoolAbi from '../abi/cyberconnectPool'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const CYBERCONNECT_POOL_BINANCE_ADDRESS = '0xF2AAF02d76e1004Cd1101427c64083F81B94Dd8A'.toLowerCase()
const height = 38699969 // May-13-2024 11:59:57 PM +UTC

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 37866347, // Apr-15-2024 12:00:01 AM +UTC
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/binance-mainnet')
	.addLog({
		address: [CYBERCONNECT_POOL_BINANCE_ADDRESS],
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
			'cyberconnectStakersBinance.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				to: Column(Types.String()),
//				amount: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/cyberconnectStakersBinance'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			if (log.address===CYBERCONNECT_POOL_BINANCE_ADDRESS &&
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
