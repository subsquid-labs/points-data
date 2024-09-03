import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {Database, LocalDest} from '@subsquid/file-store'
import * as factoryAbi from '../abi/iceCreamSwapFactory'

const FACTORY_ADDRESS = '0x9E6d21E759A7A288b80eef94E4737D313D31c13f'.toLowerCase()

const processor = new EvmBatchProcessor()
	.setGateway('https://v2.archive.subsquid.io/network/core-mainnet')
	.setBlockRange({ from: 0 })
	.setFields({
		log: {
			topics: true,
			data: true,
		},
	})
	.addLog({
		address: [FACTORY_ADDRESS],
		topic0: [factoryAbi.events.PairCreated.topic],
	})
//	.setFinalityConfirmation(100)

let pairs: string[] = []

type Metadata = {
	height: number
	hash: string
	pairs: string[]
}

let poolsInitialized = false
let poolsReady = false

let db = new Database({
	tables: {},
	dest: new LocalDest('./assets'),
	chunkSizeMb: Infinity,
	hooks: {
		async onStateRead(dest) {
			if (await dest.exists('iceCreamSwapPairs.json')) {
				let {height, hash, pairs: retrievedPools}: Metadata = await dest.readFile('iceCreamSwapPairs.json').then(JSON.parse);
				if (!poolsInitialized) {
					pairs = retrievedPools
					poolsInitialized = true
				};
				return {height, hash};
			} else {
				return undefined;
			}
		},
		async onStateUpdate(dest, info) {
			let metadata: Metadata = {
				...info,
				pairs
			};
			await dest.writeFile('iceCreamSwapPairs.json', JSON.stringify(metadata));
		},
	},
})

processor.run(db, async (ctx) => {
	if (poolsReady) process.exit()
	if (ctx.isHead) poolsReady = true

	for (let c of ctx.blocks) {
		for (let l of c.logs) {
			if (l.address === FACTORY_ADDRESS && l.topics[0] === factoryAbi.events.PairCreated.topic) {
				let {pair} = factoryAbi.events.PairCreated.decode(l)
				pairs.push(pair.toLowerCase())
			}
		}
	}

	ctx.log.info(`pairs: ${pairs.length}`)
	ctx.store.setForceFlush(true)
})
