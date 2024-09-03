import fs from 'fs'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as pairAbi from '../abi/iceCreamSwapPair'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types, dialects} from '@subsquid/file-store-csv'

const {height: pairsHeight, pairs} = JSON.parse(fs.readFileSync('./assets/iceCreamSwapPairs.json', 'utf8')) as {height: number, pairs: string[]}
const pairsSet = new Set(pairs)

const height = 14114777 // 2024-05-13T23:59:59.000+0000

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 13279620, // 2024-04-15T00:00:02.000+0000
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/core-mainnet')
	.addLog({
		address: pairs,
		topic0: [pairAbi.events.Swap.topic],
		transaction: true
	})
	.setFields({
		log: {
			topics: true,
			data: true
		},
		transaction: {
			hash: true,
			from: true
		},
		block: {
			timestamp: true
		}
	})

const dbOptions = {
	tables: {
		TransfersTable: new Table(
			'iceCreamSwaps.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				txnFrom: Column(Types.String()),
//				eventContract: Column(Types.String()),
//				sender: Column(Types.String()),
//				token0In: Column(Types.String()),
//				token1In: Column(Types.String()),
//				token0Out: Column(Types.String()),
//				token1Out: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/iceCreamSwapSwaps'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			const txn = log.getTransaction()
			if (pairsSet.has(log.address) &&
					log.topics[0]===pairAbi.events.Swap.topic) {

//				let { sender, amount0In, amount0Out, amount1In, amount1Out } = pairAbi.events.Swap.decode(log)
				ctx.store.TransfersTable.write({
//					txnHash: txn.hash,
//					timestamp: block.header.timestamp,
					txnFrom: txn.from,
//					eventContract: log.address,
//					sender: sender.toLowerCase(),
//					token0In: amount0In.toString(),
//					token1In: amount1In.toString(),
//					token0Out: amount0Out.toString(),
//					token1Out: amount1Out.toString()
				})
			}
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
