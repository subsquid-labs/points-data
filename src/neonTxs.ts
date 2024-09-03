import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types} from '@subsquid/file-store-csv'

const height = 265627791 // May 13 2024 23:59:59 PM (+00:00 UTC)

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 260169558, // Apr 15 2024 00:00:00 AM (+00:00 UTC)
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/neon-mainnet')
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
			'neonTransactions.csv',
			{
				addr: Column(Types.String()),
			}
		)
	},
	dest: new LocalDest('./assets/neonTransactions'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let txn of block.transactions) {
			ctx.store.TransfersTable.write({
				addr: txn.from,
			})
			if (txn.to != null) {
				ctx.store.TransfersTable.write({
					addr: txn.to,
				})
			}
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
