export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_vault"
            },
            {
                "type": "address",
                "name": "_router"
            },
            {
                "type": "address",
                "name": "_weth"
            },
            {
                "type": "address",
                "name": "_shortsTracker"
            },
            {
                "type": "uint256",
                "name": "_depositFee"
            },
            {
                "type": "uint256",
                "name": "_minExecutionFee"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Callback",
        "inputs": [
            {
                "type": "address",
                "name": "callbackTarget",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "success",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelDecreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "collateralDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "address",
                "name": "receiver",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockGap",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timeGap",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CancelIncreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amountIn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockGap",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timeGap",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CreateDecreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "collateralDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "address",
                "name": "receiver",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "index",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "queueIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockNumber",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockTime",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CreateIncreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amountIn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "index",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "queueIndex",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockNumber",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockTime",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "gasPrice",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DecreasePositionReferral",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "marginFeeBasisPoints",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "referralCode",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referrer",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExecuteDecreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "collateralDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "address",
                "name": "receiver",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockGap",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timeGap",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ExecuteIncreasePosition",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "path"
            },
            {
                "type": "address",
                "name": "indexToken",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amountIn",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minOut",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "bool",
                "name": "isLong",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "acceptablePrice",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "executionFee",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "blockGap",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "timeGap",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "IncreasePositionReferral",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "sizeDelta",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "marginFeeBasisPoints",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "referralCode",
                "indexed": false
            },
            {
                "type": "address",
                "name": "referrer",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetAdmin",
        "inputs": [
            {
                "type": "address",
                "name": "admin",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetCallbackGasLimit",
        "inputs": [
            {
                "type": "uint256",
                "name": "callbackGasLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetDelayValues",
        "inputs": [
            {
                "type": "uint256",
                "name": "minBlockDelayKeeper",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "minTimeDelayPublic",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "maxTimeDelay",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetDepositFee",
        "inputs": [
            {
                "type": "uint256",
                "name": "depositFee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetIncreasePositionBufferBps",
        "inputs": [
            {
                "type": "uint256",
                "name": "increasePositionBufferBps",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetIsLeverageEnabled",
        "inputs": [
            {
                "type": "bool",
                "name": "isLeverageEnabled",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetMaxGlobalSizes",
        "inputs": [
            {
                "type": "address[]",
                "name": "tokens"
            },
            {
                "type": "uint256[]",
                "name": "longSizes"
            },
            {
                "type": "uint256[]",
                "name": "shortSizes"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetMinExecutionFee",
        "inputs": [
            {
                "type": "uint256",
                "name": "minExecutionFee",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetPositionKeeper",
        "inputs": [
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "isActive",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetReferralStorage",
        "inputs": [
            {
                "type": "address",
                "name": "referralStorage",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetRequestKeysStartValues",
        "inputs": [
            {
                "type": "uint256",
                "name": "increasePositionRequestKeysStart",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "decreasePositionRequestKeysStart",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "WithdrawFees",
        "inputs": [
            {
                "type": "address",
                "name": "token",
                "indexed": false
            },
            {
                "type": "address",
                "name": "receiver",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "BASIS_POINTS_DIVISOR",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "admin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "address",
                "name": "_spender"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "callbackGasLimit",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelDecreasePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelIncreasePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "createDecreasePosition",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "_path"
            },
            {
                "type": "address",
                "name": "_indexToken"
            },
            {
                "type": "uint256",
                "name": "_collateralDelta"
            },
            {
                "type": "uint256",
                "name": "_sizeDelta"
            },
            {
                "type": "bool",
                "name": "_isLong"
            },
            {
                "type": "address",
                "name": "_receiver"
            },
            {
                "type": "uint256",
                "name": "_acceptablePrice"
            },
            {
                "type": "uint256",
                "name": "_minOut"
            },
            {
                "type": "uint256",
                "name": "_executionFee"
            },
            {
                "type": "bool",
                "name": "_withdrawETH"
            },
            {
                "type": "address",
                "name": "_callbackTarget"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "createIncreasePosition",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "_path"
            },
            {
                "type": "address",
                "name": "_indexToken"
            },
            {
                "type": "uint256",
                "name": "_amountIn"
            },
            {
                "type": "uint256",
                "name": "_minOut"
            },
            {
                "type": "uint256",
                "name": "_sizeDelta"
            },
            {
                "type": "bool",
                "name": "_isLong"
            },
            {
                "type": "uint256",
                "name": "_acceptablePrice"
            },
            {
                "type": "uint256",
                "name": "_executionFee"
            },
            {
                "type": "bytes32",
                "name": "_referralCode"
            },
            {
                "type": "address",
                "name": "_callbackTarget"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "createIncreasePositionETH",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address[]",
                "name": "_path"
            },
            {
                "type": "address",
                "name": "_indexToken"
            },
            {
                "type": "uint256",
                "name": "_minOut"
            },
            {
                "type": "uint256",
                "name": "_sizeDelta"
            },
            {
                "type": "bool",
                "name": "_isLong"
            },
            {
                "type": "uint256",
                "name": "_acceptablePrice"
            },
            {
                "type": "uint256",
                "name": "_executionFee"
            },
            {
                "type": "bytes32",
                "name": "_referralCode"
            },
            {
                "type": "address",
                "name": "_callbackTarget"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decreasePositionRequestKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decreasePositionRequestKeysStart",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decreasePositionRequests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "address",
                "name": "indexToken"
            },
            {
                "type": "uint256",
                "name": "collateralDelta"
            },
            {
                "type": "uint256",
                "name": "sizeDelta"
            },
            {
                "type": "bool",
                "name": "isLong"
            },
            {
                "type": "address",
                "name": "receiver"
            },
            {
                "type": "uint256",
                "name": "acceptablePrice"
            },
            {
                "type": "uint256",
                "name": "minOut"
            },
            {
                "type": "uint256",
                "name": "executionFee"
            },
            {
                "type": "uint256",
                "name": "blockNumber"
            },
            {
                "type": "uint256",
                "name": "blockTime"
            },
            {
                "type": "bool",
                "name": "withdrawETH"
            },
            {
                "type": "address",
                "name": "callbackTarget"
            }
        ]
    },
    {
        "type": "function",
        "name": "decreasePositionsIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "depositFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "executeDecreasePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "executeDecreasePositions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_endIndex"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "executeIncreasePosition",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "executeIncreasePositions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_endIndex"
            },
            {
                "type": "address",
                "name": "_executionFeeReceiver"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "feeReserves",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getDecreasePositionRequestPath",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getIncreasePositionRequestPath",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_key"
            }
        ],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getRequestKey",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            },
            {
                "type": "uint256",
                "name": "_index"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getRequestQueueLengths",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "gov",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increasePositionBufferBps",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increasePositionRequestKeys",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increasePositionRequestKeysStart",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "increasePositionRequests",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "account"
            },
            {
                "type": "address",
                "name": "indexToken"
            },
            {
                "type": "uint256",
                "name": "amountIn"
            },
            {
                "type": "uint256",
                "name": "minOut"
            },
            {
                "type": "uint256",
                "name": "sizeDelta"
            },
            {
                "type": "bool",
                "name": "isLong"
            },
            {
                "type": "uint256",
                "name": "acceptablePrice"
            },
            {
                "type": "uint256",
                "name": "executionFee"
            },
            {
                "type": "uint256",
                "name": "blockNumber"
            },
            {
                "type": "uint256",
                "name": "blockTime"
            },
            {
                "type": "bool",
                "name": "hasCollateralInETH"
            },
            {
                "type": "address",
                "name": "callbackTarget"
            }
        ]
    },
    {
        "type": "function",
        "name": "increasePositionsIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isLeverageEnabled",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "isPositionKeeper",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxGlobalLongSizes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxGlobalShortSizes",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxTimeDelay",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "minBlockDelayKeeper",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "minExecutionFee",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "minTimeDelayPublic",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "referralStorage",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "router",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "sendValue",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_receiver"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAdmin",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_admin"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setCallbackGasLimit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_callbackGasLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setDelayValues",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_minBlockDelayKeeper"
            },
            {
                "type": "uint256",
                "name": "_minTimeDelayPublic"
            },
            {
                "type": "uint256",
                "name": "_maxTimeDelay"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setDepositFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_depositFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setGov",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_gov"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setIncreasePositionBufferBps",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_increasePositionBufferBps"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setIsLeverageEnabled",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bool",
                "name": "_isLeverageEnabled"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMaxGlobalSizes",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_tokens"
            },
            {
                "type": "uint256[]",
                "name": "_longSizes"
            },
            {
                "type": "uint256[]",
                "name": "_shortSizes"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMinExecutionFee",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_minExecutionFee"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPositionKeeper",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_account"
            },
            {
                "type": "bool",
                "name": "_isActive"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setReferralStorage",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_referralStorage"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRequestKeysStartValues",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_increasePositionRequestKeysStart"
            },
            {
                "type": "uint256",
                "name": "_decreasePositionRequestKeysStart"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "shortsTracker",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "vault",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "weth",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdrawFees",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "address",
                "name": "_receiver"
            }
        ],
        "outputs": []
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    }
]
