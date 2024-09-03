export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_roleStore"
            }
        ]
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": [
            {
                "type": "address",
                "name": "msgSender"
            },
            {
                "type": "string",
                "name": "role"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EventLog",
        "inputs": [
            {
                "type": "address",
                "name": "msgSender",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventName",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventNameHash",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "eventData",
                "indexed": false,
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EventLog1",
        "inputs": [
            {
                "type": "address",
                "name": "msgSender",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventName",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventNameHash",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "topic1",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "eventData",
                "indexed": false,
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "EventLog2",
        "inputs": [
            {
                "type": "address",
                "name": "msgSender",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventName",
                "indexed": false
            },
            {
                "type": "string",
                "name": "eventNameHash",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "topic1",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "topic2",
                "indexed": true
            },
            {
                "type": "tuple",
                "name": "eventData",
                "indexed": false,
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "emitDataLog1",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitDataLog2",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "bytes32",
                "name": "topic2"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitDataLog3",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "bytes32",
                "name": "topic2"
            },
            {
                "type": "bytes32",
                "name": "topic3"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitDataLog4",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "bytes32",
                "name": "topic2"
            },
            {
                "type": "bytes32",
                "name": "topic3"
            },
            {
                "type": "bytes32",
                "name": "topic4"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitEventLog",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "eventName"
            },
            {
                "type": "tuple",
                "name": "eventData",
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitEventLog1",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "eventName"
            },
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "tuple",
                "name": "eventData",
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "emitEventLog2",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "eventName"
            },
            {
                "type": "bytes32",
                "name": "topic1"
            },
            {
                "type": "bytes32",
                "name": "topic2"
            },
            {
                "type": "tuple",
                "name": "eventData",
                "components": [
                    {
                        "type": "tuple",
                        "name": "addressItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "address[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "uintItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "uint256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "intItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "int256[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "boolItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bool[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytes32Items",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes32[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "bytesItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "bytes[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "tuple",
                        "name": "stringItems",
                        "components": [
                            {
                                "type": "tuple[]",
                                "name": "items",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string",
                                        "name": "value"
                                    }
                                ]
                            },
                            {
                                "type": "tuple[]",
                                "name": "arrayItems",
                                "components": [
                                    {
                                        "type": "string",
                                        "name": "key"
                                    },
                                    {
                                        "type": "string[]",
                                        "name": "value"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "roleStore",
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
    }
]
