import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const height = 14114777 // 2024-05-13T23:59:59.000+0000

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 13279620, // 2024-04-15T00:00:02.000+0000
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/core-mainnet')
	.addTransaction({})
	.setFields({
		transaction: {
			from: true,
			hash: true,
			value: true
		},
		block: {
			timestamp: true
		}
	})

const dbOptions = {
	tables: {
		TransfersTable: new Table(
			'coreTransactions.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				from: Column(Types.String()),
//				value: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/coreTransactions'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let txn of block.transactions) {
			ctx.store.TransfersTable.write({
//				txnHash: txn.hash,
//				timestamp: block.header.timestamp,
				from: txn.from,
//				value: txn.value.toString()
			})
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
