import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './cyberconnectPool.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Deposit: new LogEvent<([to: string, amount: bigint] & {to: string, amount: bigint})>(
        abi, '0xe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    Paused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258'
    ),
    Unpaused: new LogEvent<([account: string] & {account: string})>(
        abi, '0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa'
    ),
    WithdrawCyber: new LogEvent<([to: string, amount: bigint] & {to: string, amount: bigint})>(
        abi, '0x8bec7c41d9959d0215c2f0bdc813edc90bb09d803a4d571093b69b509febf07a'
    ),
    WithdrawERC20: new LogEvent<([currency: string, to: string, amount: bigint] & {currency: string, to: string, amount: bigint})>(
        abi, '0x33c35f9541201e342d5e7467016e65a0a06182eb12a5f17103f71cec95b6cb29'
    ),
}

export const functions = {
    cyber: new Func<[], {}, string>(
        abi, '0x7430cb3f'
    ),
    deposit: new Func<[to: string, amount: bigint], {to: string, amount: bigint}, []>(
        abi, '0x47e7ef24'
    ),
    deposits: new Func<[_: string], {}, bigint>(
        abi, '0xfc7e286d'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    pause: new Func<[], {}, []>(
        abi, '0x8456cb59'
    ),
    paused: new Func<[], {}, boolean>(
        abi, '0x5c975abb'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    totalDeposits: new Func<[], {}, bigint>(
        abi, '0x7d882097'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
    unpause: new Func<[], {}, []>(
        abi, '0x3f4ba83a'
    ),
    withdraw: new Func<[to: string, amount: bigint], {to: string, amount: bigint}, []>(
        abi, '0xf3fef3a3'
    ),
    withdrawERC20: new Func<[currency: string, to: string, amount: bigint], {currency: string, to: string, amount: bigint}, []>(
        abi, '0x44004cc1'
    ),
}

export class Contract extends ContractBase {

    cyber(): Promise<string> {
        return this.eth_call(functions.cyber, [])
    }

    deposits(arg0: string): Promise<bigint> {
        return this.eth_call(functions.deposits, [arg0])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    paused(): Promise<boolean> {
        return this.eth_call(functions.paused, [])
    }

    totalDeposits(): Promise<bigint> {
        return this.eth_call(functions.totalDeposits, [])
    }
}
