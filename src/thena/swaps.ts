import fs from 'fs'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as algebraPoolAbi from '../abi/algebraPool'
import * as solidlyPairAbi from '../abi/solidlyPair'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types, dialects} from '@subsquid/file-store-csv'

const {height: pairsHeight, addresses} = JSON.parse(fs.readFileSync('./assets/thena/pools.json', 'utf8')) as { height: number, addresses: { algebraPools: string[], solidlyPairs: string[] } }
const algebraPoolsSet = new Set(addresses.algebraPools)
const solidlyPairsSet = new Set(addresses.solidlyPairs)

const height = 38699969 // May-13-2024 11:59:57 PM +UTC

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 37866347, // Apr-15-2024 12:00:01 AM +UTC
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/binance-mainnet')
	.addLog({
		address: addresses.algebraPools,
		topic0: [algebraPoolAbi.events.Swap.topic],
		transaction: true
	})
	.addLog({
		address: addresses.solidlyPairs,
		topic0: [solidlyPairAbi.events.Swap.topic],
		transaction: true
	})
	.setFields({
		log: {
			topics: true,
//			data: true
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
			'thenaSwaps.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
				txnFrom: Column(Types.String()),
//				eventContract: Column(Types.String()),
//				sender: Column(Types.String()),
//				token0In: Column(Types.String()),
//				token1In: Column(Types.String()),
//				token0Out: Column(Types.String()),
//				token1Out: Column(Types.String()),
//				poolType: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/thena/swaps'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			const txn = log.getTransaction()

			if (solidlyPairsSet.has(log.address) &&
					log.topics[0]===solidlyPairAbi.events.Swap.topic) {

				//let { sender, amount0In, amount0Out, amount1In, amount1Out } = solidlyPairAbi.events.Swap.decode(log)
				ctx.store.TransfersTable.write({
//					txnHash: txn.hash,
//					timestamp: block.header.timestamp,
					txnFrom: txn.from,
//					eventContract: log.address,
//					sender: sender.toLowerCase(),
//					token0In: amount0In.toString(),
//					token1In: amount1In.toString(),
//					token0Out: amount0Out.toString(),
//					token1Out: amount1Out.toString(),
//					poolType: 'solidly'
				})
			}

			if (algebraPoolsSet.has(log.address) &&
					log.topics[0]===algebraPoolAbi.events.Swap.topic) {

				//let { sender, amount0, amount1 } = algebraPoolAbi.events.Swap.decode(log)
				// neglecting the swap direction for now, as we're only interested in tot swaps size
				ctx.store.TransfersTable.write({
//					txnHash: txn.hash,
//					timestamp: block.header.timestamp,
					txnFrom: txn.from,
//					eventContract: log.address,
//					sender: sender.toLowerCase(),
//					token0In: amount0.toString(),
//					token1In: '0',
//					token0Out: '0',
//					token1Out: amount1.toString(),
//					poolType: 'algebra'
				})
			}
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
