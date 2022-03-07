/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  Issue552_Reproduction,
  Issue552_ReproductionInterface,
} from "../../v0.8.9/Issue552_Reproduction";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bars",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "int256",
                name: "val",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "blockTimestamp",
                type: "uint256",
              },
            ],
            internalType: "struct Issue552_Observer.Observation[65535]",
            name: "observations",
            type: "tuple[65535]",
          },
          {
            internalType: "uint16",
            name: "index",
            type: "uint16",
          },
        ],
        internalType: "struct Issue552_Reproduction.ObservationParams",
        name: "fooObservations",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[10]",
        name: "values",
        type: "uint256[10]",
      },
    ],
    name: "input",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "barId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newVal",
        type: "uint256",
      },
    ],
    name: "makeObservation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class Issue552_Reproduction__factory {
  static readonly abi = _abi;
  static createInterface(): Issue552_ReproductionInterface {
    return new utils.Interface(_abi) as Issue552_ReproductionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Issue552_Reproduction {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Issue552_Reproduction;
  }
}
