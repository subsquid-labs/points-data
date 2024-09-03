import fs from 'fs'
import assert from 'assert'
import {EvmBatchProcessor} from '@subsquid/evm-processor'
import * as gmxEventEmitterAbi from './abi/gmxEventEmitter'
import * as gmxPositionRouterAbi from './abi/gmxPositionRouter'
import {Database, LocalDest} from '@subsquid/file-store'
import {Column, Table, Types, dialects} from '@subsquid/file-store-csv'

const height = 210997975 // May-13-2024 11:59:59 PM +UTC

// v1
const GMX_POSITION_ROUTER_ADDRESS = '0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868'.toLowerCase()

// v2
const GMX_EVENT_EMITTER_ADDRESS = '0xC8ee91A54287DB53897056e12D9819156D3822Fb'.toLowerCase()
const GMX_EVENT_EMITTER_ORDER_CREATED_HASH = '0xa7427759bfd3b941f14e687e129519da3c9b0046c5b9aaa290bb1dede63753b3'

const processor = new EvmBatchProcessor()
	.setBlockRange({
		from: 201095467, // Apr-15-2024 12:00:00 AM +UTC
		to: height
	})
	.setGateway('https://v2.archive.subsquid.io/network/arbitrum-one')
	.addLog({
		address: [GMX_EVENT_EMITTER_ADDRESS],
		topic0: [gmxEventEmitterAbi.events.EventLog2.topic],
		topic1: [GMX_EVENT_EMITTER_ORDER_CREATED_HASH],
		transaction: true
	})
	.addLog({
		address: [GMX_POSITION_ROUTER_ADDRESS],
		topic0: [gmxPositionRouterAbi.events.CreateIncreasePosition.topic],
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
			'gmxPerpetuals.csv',
			{
//				txnHash: Column(Types.String()),
//				timestamp: Column(Types.Numeric()),
//				version: Column(Types.Numeric()),
				trader: Column(Types.String())
			}
		)
	},
	dest: new LocalDest('./assets/gmxPerpetuals'),
	chunkSizeMb: Infinity
}

processor.run(new Database(dbOptions), async (ctx) => {
	for (let block of ctx.blocks) {
		for (let log of block.logs) {
			const txn = log.getTransaction()
			let trader = null
			let version

			// v1
			if (log.address===GMX_POSITION_ROUTER_ADDRESS &&
					log.topics[0]===gmxPositionRouterAbi.events.CreateIncreasePosition.topic) {

				trader = log.topics[1].replace('0x000000000000000000000000', '0x').toLowerCase()
				version = 1
			}

			// v2
			if (log.address===GMX_EVENT_EMITTER_ADDRESS &&
			    log.topics[0]===gmxEventEmitterAbi.events.EventLog2.topic &&
			    log.topics[1]===GMX_EVENT_EMITTER_ORDER_CREATED_HASH) {

				trader = log.topics[3].replace('0x000000000000000000000000', '0x').toLowerCase()
				version = 2
			}

			if (trader != null && version) {
				ctx.store.TransfersTable.write({
//					txnHash: txn.hash,
//					timestamp: block.header.timestamp,
//					version,
					trader
				})
			}
		}
	}

	if (ctx.blocks[ctx.blocks.length-1].header.height >= height) {
		ctx.log.info(`Last processed block was at ${new Date(ctx.blocks[ctx.blocks.length-1].header.timestamp)}`)
		ctx.store.setForceFlush(true)
	}
})
