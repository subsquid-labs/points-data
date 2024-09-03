import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './gmxPositionRouter.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Callback: new LogEvent<([callbackTarget: string, success: boolean] & {callbackTarget: string, success: boolean})>(
        abi, '0x46ddbd62fc1a7626fe9c43026cb0694aec0b031fe81ac66fb4cfe9381dc6fe72'
    ),
    CancelDecreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint] & {account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint})>(
        abi, '0x87abfd78e844f28318363bdf3da99eab2f4a2da9ff7ae365484507f7b6c3f805'
    ),
    CancelIncreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint] & {account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint})>(
        abi, '0x35b638e650e2328786fb405bd69d2083dbedc018d086662e74b775b4f1dae4bf'
    ),
    CreateDecreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, index: bigint, queueIndex: bigint, blockNumber: bigint, blockTime: bigint] & {account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, index: bigint, queueIndex: bigint, blockNumber: bigint, blockTime: bigint})>(
        abi, '0x81ed0476a7e785a9e4728fffd679ea97176ca1ac85e1003462558bb5677da57b'
    ),
    CreateIncreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, index: bigint, queueIndex: bigint, blockNumber: bigint, blockTime: bigint, gasPrice: bigint] & {account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, index: bigint, queueIndex: bigint, blockNumber: bigint, blockTime: bigint, gasPrice: bigint})>(
        abi, '0x5265bc4952da402633b3fc35f67ab4245493a0ab94dd8ab123667c8d45a4485c'
    ),
    DecreasePositionReferral: new LogEvent<([account: string, sizeDelta: bigint, marginFeeBasisPoints: bigint, referralCode: string, referrer: string] & {account: string, sizeDelta: bigint, marginFeeBasisPoints: bigint, referralCode: string, referrer: string})>(
        abi, '0x474c763ff84bf2c2039a6d9fea955ecd0f724030e3c365b91169c6a16fe751b7'
    ),
    ExecuteDecreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint] & {account: string, path: Array<string>, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint})>(
        abi, '0x21435c5b618d77ff3657140cd3318e2cffaebc5e0e1b7318f56a9ba4044c3ed2'
    ),
    ExecuteIncreasePosition: new LogEvent<([account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint] & {account: string, path: Array<string>, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockGap: bigint, timeGap: bigint})>(
        abi, '0x1be316b94d38c07bd41cdb4913772d0a0a82802786a2f8b657b6e85dbcdfc641'
    ),
    IncreasePositionReferral: new LogEvent<([account: string, sizeDelta: bigint, marginFeeBasisPoints: bigint, referralCode: string, referrer: string] & {account: string, sizeDelta: bigint, marginFeeBasisPoints: bigint, referralCode: string, referrer: string})>(
        abi, '0xc2414023ce7002ee98557d1e7be21e5559073336f2217ee5f9b2e50fd85f71ee'
    ),
    SetAdmin: new LogEvent<([admin: string] & {admin: string})>(
        abi, '0x5a272403b402d892977df56625f4164ccaf70ca3863991c43ecfe76a6905b0a1'
    ),
    SetCallbackGasLimit: new LogEvent<([callbackGasLimit: bigint] & {callbackGasLimit: bigint})>(
        abi, '0x22bd2c9f980325d046be74aaef5fc76df4a2bc3fbc7c5a1200fcc79fe80dab6c'
    ),
    SetDelayValues: new LogEvent<([minBlockDelayKeeper: bigint, minTimeDelayPublic: bigint, maxTimeDelay: bigint] & {minBlockDelayKeeper: bigint, minTimeDelayPublic: bigint, maxTimeDelay: bigint})>(
        abi, '0xb98e759701eaca2e60c25e91109003c1c7442ef731b5d569037063005da8254d'
    ),
    SetDepositFee: new LogEvent<([depositFee: bigint] & {depositFee: bigint})>(
        abi, '0x974fd3c1fcb4653dfc4fb740c4c692cd212d55c28f163f310128cb64d8300675'
    ),
    SetIncreasePositionBufferBps: new LogEvent<([increasePositionBufferBps: bigint] & {increasePositionBufferBps: bigint})>(
        abi, '0x21167d0d4661af93817ebce920f18986eed3d75d5e1c03f2aed05efcbafbc452'
    ),
    SetIsLeverageEnabled: new LogEvent<([isLeverageEnabled: boolean] & {isLeverageEnabled: boolean})>(
        abi, '0x4eb87a5935d402aa24c01b45bfb30adefcd2328b480f2d967864de4b64ea929f'
    ),
    SetMaxGlobalSizes: new LogEvent<([tokens: Array<string>, longSizes: Array<bigint>, shortSizes: Array<bigint>] & {tokens: Array<string>, longSizes: Array<bigint>, shortSizes: Array<bigint>})>(
        abi, '0xae32d569b058895b9620d6552b09aaffedc9a6f396be4d595a224ad09f8b2139'
    ),
    SetMinExecutionFee: new LogEvent<([minExecutionFee: bigint] & {minExecutionFee: bigint})>(
        abi, '0x52a8358457e20bbb36e4086b83fb0749599f1893fe4c35a876c46dc4886d12db'
    ),
    SetPositionKeeper: new LogEvent<([account: string, isActive: boolean] & {account: string, isActive: boolean})>(
        abi, '0xfbabc02389290a451c6e600d05bf9887b99bfad39d8e1237e4e3df042e4941fe'
    ),
    SetReferralStorage: new LogEvent<([referralStorage: string] & {referralStorage: string})>(
        abi, '0x828abcccea18192c21d645e575652c49e20b986dab777906fc473d056b01b6a8'
    ),
    SetRequestKeysStartValues: new LogEvent<([increasePositionRequestKeysStart: bigint, decreasePositionRequestKeysStart: bigint] & {increasePositionRequestKeysStart: bigint, decreasePositionRequestKeysStart: bigint})>(
        abi, '0xebb0f666150f4be5b60c45df8f3e49992510b0128027fe58eea6110f296493bc'
    ),
    WithdrawFees: new LogEvent<([token: string, receiver: string, amount: bigint] & {token: string, receiver: string, amount: bigint})>(
        abi, '0x4f1b51dd7a2fcb861aa2670f668be66835c4ee12b4bbbf037e4d0018f39819e4'
    ),
}

export const functions = {
    BASIS_POINTS_DIVISOR: new Func<[], {}, bigint>(
        abi, '0x126082cf'
    ),
    admin: new Func<[], {}, string>(
        abi, '0xf851a440'
    ),
    approve: new Func<[_token: string, _spender: string, _amount: bigint], {_token: string, _spender: string, _amount: bigint}, []>(
        abi, '0xe1f21c67'
    ),
    callbackGasLimit: new Func<[], {}, bigint>(
        abi, '0x24f74697'
    ),
    cancelDecreasePosition: new Func<[_key: string, _executionFeeReceiver: string], {_key: string, _executionFeeReceiver: string}, boolean>(
        abi, '0x60a362e2'
    ),
    cancelIncreasePosition: new Func<[_key: string, _executionFeeReceiver: string], {_key: string, _executionFeeReceiver: string}, boolean>(
        abi, '0x225fc9fd'
    ),
    createDecreasePosition: new Func<[_path: Array<string>, _indexToken: string, _collateralDelta: bigint, _sizeDelta: bigint, _isLong: boolean, _receiver: string, _acceptablePrice: bigint, _minOut: bigint, _executionFee: bigint, _withdrawETH: boolean, _callbackTarget: string], {_path: Array<string>, _indexToken: string, _collateralDelta: bigint, _sizeDelta: bigint, _isLong: boolean, _receiver: string, _acceptablePrice: bigint, _minOut: bigint, _executionFee: bigint, _withdrawETH: boolean, _callbackTarget: string}, string>(
        abi, '0x7be7d141'
    ),
    createIncreasePosition: new Func<[_path: Array<string>, _indexToken: string, _amountIn: bigint, _minOut: bigint, _sizeDelta: bigint, _isLong: boolean, _acceptablePrice: bigint, _executionFee: bigint, _referralCode: string, _callbackTarget: string], {_path: Array<string>, _indexToken: string, _amountIn: bigint, _minOut: bigint, _sizeDelta: bigint, _isLong: boolean, _acceptablePrice: bigint, _executionFee: bigint, _referralCode: string, _callbackTarget: string}, string>(
        abi, '0xf2ae372f'
    ),
    createIncreasePositionETH: new Func<[_path: Array<string>, _indexToken: string, _minOut: bigint, _sizeDelta: bigint, _isLong: boolean, _acceptablePrice: bigint, _executionFee: bigint, _referralCode: string, _callbackTarget: string], {_path: Array<string>, _indexToken: string, _minOut: bigint, _sizeDelta: bigint, _isLong: boolean, _acceptablePrice: bigint, _executionFee: bigint, _referralCode: string, _callbackTarget: string}, string>(
        abi, '0x5b88e8c6'
    ),
    decreasePositionRequestKeys: new Func<[_: bigint], {}, string>(
        abi, '0x4278555f'
    ),
    decreasePositionRequestKeysStart: new Func<[], {}, bigint>(
        abi, '0x1bca8cf0'
    ),
    decreasePositionRequests: new Func<[_: string], {}, ([account: string, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, withdrawETH: boolean, callbackTarget: string] & {account: string, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, withdrawETH: boolean, callbackTarget: string})>(
        abi, '0x1f285106'
    ),
    decreasePositionsIndex: new Func<[_: string], {}, bigint>(
        abi, '0xfa444577'
    ),
    depositFee: new Func<[], {}, bigint>(
        abi, '0x67a52793'
    ),
    executeDecreasePosition: new Func<[_key: string, _executionFeeReceiver: string], {_key: string, _executionFeeReceiver: string}, boolean>(
        abi, '0x0d4d003d'
    ),
    executeDecreasePositions: new Func<[_endIndex: bigint, _executionFeeReceiver: string], {_endIndex: bigint, _executionFeeReceiver: string}, []>(
        abi, '0xf3883d8b'
    ),
    executeIncreasePosition: new Func<[_key: string, _executionFeeReceiver: string], {_key: string, _executionFeeReceiver: string}, boolean>(
        abi, '0x27b42c0f'
    ),
    executeIncreasePositions: new Func<[_endIndex: bigint, _executionFeeReceiver: string], {_endIndex: bigint, _executionFeeReceiver: string}, []>(
        abi, '0x9a208100'
    ),
    feeReserves: new Func<[_: string], {}, bigint>(
        abi, '0x1ce9cb8f'
    ),
    getDecreasePositionRequestPath: new Func<[_key: string], {_key: string}, Array<string>>(
        abi, '0x5d5c22e8'
    ),
    getIncreasePositionRequestPath: new Func<[_key: string], {_key: string}, Array<string>>(
        abi, '0x95e9bbd7'
    ),
    getRequestKey: new Func<[_account: string, _index: bigint], {_account: string, _index: bigint}, string>(
        abi, '0x62f8a3fe'
    ),
    getRequestQueueLengths: new Func<[], {}, [_: bigint, _: bigint, _: bigint, _: bigint]>(
        abi, '0xf2cea6a5'
    ),
    gov: new Func<[], {}, string>(
        abi, '0x12d43a51'
    ),
    increasePositionBufferBps: new Func<[], {}, bigint>(
        abi, '0x98d1e03a'
    ),
    increasePositionRequestKeys: new Func<[_: bigint], {}, string>(
        abi, '0x04225954'
    ),
    increasePositionRequestKeysStart: new Func<[], {}, bigint>(
        abi, '0x9b578620'
    ),
    increasePositionRequests: new Func<[_: string], {}, ([account: string, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, hasCollateralInETH: boolean, callbackTarget: string] & {account: string, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, hasCollateralInETH: boolean, callbackTarget: string})>(
        abi, '0xfaf990f3'
    ),
    increasePositionsIndex: new Func<[_: string], {}, bigint>(
        abi, '0x633451de'
    ),
    isLeverageEnabled: new Func<[], {}, boolean>(
        abi, '0x3e72a262'
    ),
    isPositionKeeper: new Func<[_: string], {}, boolean>(
        abi, '0x36eba48a'
    ),
    maxGlobalLongSizes: new Func<[_: string], {}, bigint>(
        abi, '0x1045c74e'
    ),
    maxGlobalShortSizes: new Func<[_: string], {}, bigint>(
        abi, '0x9698d25a'
    ),
    maxTimeDelay: new Func<[], {}, bigint>(
        abi, '0xcb0269c9'
    ),
    minBlockDelayKeeper: new Func<[], {}, bigint>(
        abi, '0x5841fcaa'
    ),
    minExecutionFee: new Func<[], {}, bigint>(
        abi, '0x63ae2103'
    ),
    minTimeDelayPublic: new Func<[], {}, bigint>(
        abi, '0x3a2a80c7'
    ),
    referralStorage: new Func<[], {}, string>(
        abi, '0x006cc35e'
    ),
    router: new Func<[], {}, string>(
        abi, '0xf887ea40'
    ),
    sendValue: new Func<[_receiver: string, _amount: bigint], {_receiver: string, _amount: bigint}, []>(
        abi, '0x24a084df'
    ),
    setAdmin: new Func<[_admin: string], {_admin: string}, []>(
        abi, '0x704b6c02'
    ),
    setCallbackGasLimit: new Func<[_callbackGasLimit: bigint], {_callbackGasLimit: bigint}, []>(
        abi, '0x8a54942f'
    ),
    setDelayValues: new Func<[_minBlockDelayKeeper: bigint, _minTimeDelayPublic: bigint, _maxTimeDelay: bigint], {_minBlockDelayKeeper: bigint, _minTimeDelayPublic: bigint, _maxTimeDelay: bigint}, []>(
        abi, '0x4067b132'
    ),
    setDepositFee: new Func<[_depositFee: bigint], {_depositFee: bigint}, []>(
        abi, '0x490ae210'
    ),
    setGov: new Func<[_gov: string], {_gov: string}, []>(
        abi, '0xcfad57a2'
    ),
    setIncreasePositionBufferBps: new Func<[_increasePositionBufferBps: bigint], {_increasePositionBufferBps: bigint}, []>(
        abi, '0x233bfe3b'
    ),
    setIsLeverageEnabled: new Func<[_isLeverageEnabled: boolean], {_isLeverageEnabled: boolean}, []>(
        abi, '0x7c2eb9f7'
    ),
    setMaxGlobalSizes: new Func<[_tokens: Array<string>, _longSizes: Array<bigint>, _shortSizes: Array<bigint>], {_tokens: Array<string>, _longSizes: Array<bigint>, _shortSizes: Array<bigint>}, []>(
        abi, '0xef12c67e'
    ),
    setMinExecutionFee: new Func<[_minExecutionFee: bigint], {_minExecutionFee: bigint}, []>(
        abi, '0xfc2cee62'
    ),
    setPositionKeeper: new Func<[_account: string, _isActive: boolean], {_account: string, _isActive: boolean}, []>(
        abi, '0x3422ead1'
    ),
    setReferralStorage: new Func<[_referralStorage: string], {_referralStorage: string}, []>(
        abi, '0xae4d7f9a'
    ),
    setRequestKeysStartValues: new Func<[_increasePositionRequestKeysStart: bigint, _decreasePositionRequestKeysStart: bigint], {_increasePositionRequestKeysStart: bigint, _decreasePositionRequestKeysStart: bigint}, []>(
        abi, '0x308aa81f'
    ),
    shortsTracker: new Func<[], {}, string>(
        abi, '0x657bc5d0'
    ),
    vault: new Func<[], {}, string>(
        abi, '0xfbfa77cf'
    ),
    weth: new Func<[], {}, string>(
        abi, '0x3fc8cef3'
    ),
    withdrawFees: new Func<[_token: string, _receiver: string], {_token: string, _receiver: string}, []>(
        abi, '0xf2555278'
    ),
}

export class Contract extends ContractBase {

    BASIS_POINTS_DIVISOR(): Promise<bigint> {
        return this.eth_call(functions.BASIS_POINTS_DIVISOR, [])
    }

    admin(): Promise<string> {
        return this.eth_call(functions.admin, [])
    }

    callbackGasLimit(): Promise<bigint> {
        return this.eth_call(functions.callbackGasLimit, [])
    }

    decreasePositionRequestKeys(arg0: bigint): Promise<string> {
        return this.eth_call(functions.decreasePositionRequestKeys, [arg0])
    }

    decreasePositionRequestKeysStart(): Promise<bigint> {
        return this.eth_call(functions.decreasePositionRequestKeysStart, [])
    }

    decreasePositionRequests(arg0: string): Promise<([account: string, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, withdrawETH: boolean, callbackTarget: string] & {account: string, indexToken: string, collateralDelta: bigint, sizeDelta: bigint, isLong: boolean, receiver: string, acceptablePrice: bigint, minOut: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, withdrawETH: boolean, callbackTarget: string})> {
        return this.eth_call(functions.decreasePositionRequests, [arg0])
    }

    decreasePositionsIndex(arg0: string): Promise<bigint> {
        return this.eth_call(functions.decreasePositionsIndex, [arg0])
    }

    depositFee(): Promise<bigint> {
        return this.eth_call(functions.depositFee, [])
    }

    feeReserves(arg0: string): Promise<bigint> {
        return this.eth_call(functions.feeReserves, [arg0])
    }

    getDecreasePositionRequestPath(_key: string): Promise<Array<string>> {
        return this.eth_call(functions.getDecreasePositionRequestPath, [_key])
    }

    getIncreasePositionRequestPath(_key: string): Promise<Array<string>> {
        return this.eth_call(functions.getIncreasePositionRequestPath, [_key])
    }

    getRequestKey(_account: string, _index: bigint): Promise<string> {
        return this.eth_call(functions.getRequestKey, [_account, _index])
    }

    getRequestQueueLengths(): Promise<[_: bigint, _: bigint, _: bigint, _: bigint]> {
        return this.eth_call(functions.getRequestQueueLengths, [])
    }

    gov(): Promise<string> {
        return this.eth_call(functions.gov, [])
    }

    increasePositionBufferBps(): Promise<bigint> {
        return this.eth_call(functions.increasePositionBufferBps, [])
    }

    increasePositionRequestKeys(arg0: bigint): Promise<string> {
        return this.eth_call(functions.increasePositionRequestKeys, [arg0])
    }

    increasePositionRequestKeysStart(): Promise<bigint> {
        return this.eth_call(functions.increasePositionRequestKeysStart, [])
    }

    increasePositionRequests(arg0: string): Promise<([account: string, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, hasCollateralInETH: boolean, callbackTarget: string] & {account: string, indexToken: string, amountIn: bigint, minOut: bigint, sizeDelta: bigint, isLong: boolean, acceptablePrice: bigint, executionFee: bigint, blockNumber: bigint, blockTime: bigint, hasCollateralInETH: boolean, callbackTarget: string})> {
        return this.eth_call(functions.increasePositionRequests, [arg0])
    }

    increasePositionsIndex(arg0: string): Promise<bigint> {
        return this.eth_call(functions.increasePositionsIndex, [arg0])
    }

    isLeverageEnabled(): Promise<boolean> {
        return this.eth_call(functions.isLeverageEnabled, [])
    }

    isPositionKeeper(arg0: string): Promise<boolean> {
        return this.eth_call(functions.isPositionKeeper, [arg0])
    }

    maxGlobalLongSizes(arg0: string): Promise<bigint> {
        return this.eth_call(functions.maxGlobalLongSizes, [arg0])
    }

    maxGlobalShortSizes(arg0: string): Promise<bigint> {
        return this.eth_call(functions.maxGlobalShortSizes, [arg0])
    }

    maxTimeDelay(): Promise<bigint> {
        return this.eth_call(functions.maxTimeDelay, [])
    }

    minBlockDelayKeeper(): Promise<bigint> {
        return this.eth_call(functions.minBlockDelayKeeper, [])
    }

    minExecutionFee(): Promise<bigint> {
        return this.eth_call(functions.minExecutionFee, [])
    }

    minTimeDelayPublic(): Promise<bigint> {
        return this.eth_call(functions.minTimeDelayPublic, [])
    }

    referralStorage(): Promise<string> {
        return this.eth_call(functions.referralStorage, [])
    }

    router(): Promise<string> {
        return this.eth_call(functions.router, [])
    }

    shortsTracker(): Promise<string> {
        return this.eth_call(functions.shortsTracker, [])
    }

    vault(): Promise<string> {
        return this.eth_call(functions.vault, [])
    }

    weth(): Promise<string> {
        return this.eth_call(functions.weth, [])
    }
}
