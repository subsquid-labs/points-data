import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const height = 11110127 // May-13-2024 23:59:48 PM +00:00UTC

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 9393391, // Apr-15-2024 00:00:02 AM +00:00UTC
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/merlin-mainnet')
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
			'merlinTransactions.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				from: Column(Types.String()),
//				value: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/merlinTransactions'),
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
