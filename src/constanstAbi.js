export const coffeeContractAddress =
  "0xaaB0d6BEA10BdD3DEdBd3e645Ffe945B86f04dA2";
export const coffeeContractABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      { indexed: false, internalType: "string", name: "name", type: "string" },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewCoffee",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "string", name: "_message", type: "string" },
    ],
    name: "buyCoffee",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "coffees",
    outputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "message", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoffees",
    outputs: [
      {
        components: [
          { internalType: "address", name: "from", type: "address" },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
          { internalType: "string", name: "name", type: "string" },
          { internalType: "string", name: "message", type: "string" },
        ],
        internalType: "struct BuyMeACoffee.Coffee[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawTips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
