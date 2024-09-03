import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {Database, LocalDest} from '@subsquid/file-store'
import * as algebraPoolFactoryAbi from '../abi/algebraFactory'
import * as solidlyPoolFactoryAbi from '../abi/solidlyFactory'

const SOLIDLY_FACTORY = '0xafd89d21bdb66d00817d4153e055830b1c2b3970'
const ALGEBRA_FACTORY = '0x306f06c147f064a010530292a1eb6737c3e378e4'

const earliestPairFactoryDeploymentBlock = 24468802

const processor = new EvmBatchProcessor()
	.setGateway('https://v2.archive.subsquid.io/network/binance-mainnet')
	.setBlockRange({
		from: earliestPairFactoryDeploymentBlock
	})
	.setFields({
		log: {
			topics: true,
			data: true,
		},
	})
	.addLog({
		address: [SOLIDLY_FACTORY],
		topic0: [solidlyPoolFactoryAbi.events.PairCreated.topic],
	})
	.addLog({
		address: [ALGEBRA_FACTORY],
		topic0: [algebraPoolFactoryAbi.events.Pool.topic],
	})

let solidlyPools: string[] = []
let algebraPools: string[] = []

type Metadata = {
	height: number
	hash: string
	addresses: Record<string, string[]>
}

let isInit = false
let isReady = false

let db = new Database({
	tables: {},
	dest: new LocalDest('./assets/thena'),
	chunkSizeMb: Infinity,
	hooks: {
		async onStateRead(dest) {
			if (await dest.exists('pools.json')) {
				let {height, hash, addresses}: Metadata = await dest.readFile('pools.json').then(JSON.parse)

				if (!isInit) {
					solidlyPools = addresses.algebraPools
					algebraPools = addresses.solidlyPairs
					isInit = true
				}

				return {height, hash}
			} else {
				return undefined
			}
		},
		async onStateUpdate(dest, info) {
			let metadata: Metadata = {
				...info,
				addresses: {
					algebraPools,
					solidlyPairs: solidlyPools
				},
			}
			await dest.writeFile('pools.json', JSON.stringify(metadata))
		},
	},
})

processor.run(db, async (ctx) => {
	if (isReady) process.exit()
	if (ctx.isHead) isReady = true

	for (let c of ctx.blocks) {
		for (let i of c.logs) {
			if (i.address === SOLIDLY_FACTORY) {
				let {pair} = solidlyPoolFactoryAbi.events.PairCreated.decode(i)
				solidlyPools.push(pair.toLowerCase())
			}

			if (i.address === ALGEBRA_FACTORY) {
				let {pool} = algebraPoolFactoryAbi.events.Pool.decode(i)
				algebraPools.push(pool.toLowerCase())
			}
		}
	}

	ctx.log.info(`solidlyPools: ${solidlyPools.length}`)
	ctx.log.info(`algebraPools: ${algebraPools.length}`)

	ctx.store.setForceFlush(true)
})
