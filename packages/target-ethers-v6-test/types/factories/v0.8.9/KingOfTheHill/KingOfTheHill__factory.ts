/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type {
  KingOfTheHill,
  KingOfTheHillInterface,
} from "../../../v0.8.9/KingOfTheHill/KingOfTheHill";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "highestBidValue",
        type: "uint256",
      },
    ],
    name: "BidNotHighEnough",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "bidder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct KingOfTheHill.Bid",
        name: "bid",
        type: "tuple",
      },
    ],
    name: "HighestBidIncreased",
    type: "event",
  },
  {
    inputs: [],
    name: "bid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "highestBid",
    outputs: [
      {
        internalType: "address payable",
        name: "bidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class KingOfTheHill__factory {
  static readonly abi = _abi;
  static createInterface(): KingOfTheHillInterface {
    return new Interface(_abi) as KingOfTheHillInterface;
  }
  static connect(address: string, runner: ContractRunner): KingOfTheHill {
    return new Contract(address, _abi, runner) as unknown as KingOfTheHill;
  }
}
