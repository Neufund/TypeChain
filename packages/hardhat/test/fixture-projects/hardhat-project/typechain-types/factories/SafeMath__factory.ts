/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory } from "ethers";
import type { Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMath, SafeMathInterface } from "../SafeMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "div",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "num1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "num2",
        type: "uint256",
      },
    ],
    name: "sub",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x610210610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c8063771602f71461005b578063a391c15b146100a7578063b67d77c5146100f3578063c8a4ac9c1461013f575b600080fd5b6100916004803603604081101561007157600080fd5b81019080803590602001909291908035906020019092919050505061018b565b6040518082815260200191505060405180910390f35b6100dd600480360360408110156100bd57600080fd5b81019080803590602001909291908035906020019092919050505061019d565b6040518082815260200191505060405180910390f35b6101296004803603604081101561010957600080fd5b8101908080359060200190929190803590602001909291905050506101b6565b6040518082815260200191505060405180910390f35b6101756004803603604081101561015557600080fd5b8101908080359060200190929190803590602001909291905050506101c8565b6040518082815260200191505060405180910390f35b60008082840190508091505092915050565b6000808284816101a957fe5b0490508091505092915050565b60008082840390508091505092915050565b6000808284029050809150509291505056fea26469706673582212203c34f01efc94c8b101efa6073eac7b7664a0edb302f1f7cd4364fc6bef8a919164736f6c63430007030033";

type SafeMathConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeMathConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeMath__factory extends ContractFactory {
  constructor(...args: SafeMathConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SafeMath";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMath> {
    return super.deploy(overrides || {}) as Promise<SafeMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeMath {
    return super.attach(address) as SafeMath;
  }
  connect(signer: Signer): SafeMath__factory {
    return super.connect(signer) as SafeMath__factory;
  }
  static readonly contractName: "SafeMath";
  public readonly contractName: "SafeMath";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMathInterface {
    return new utils.Interface(_abi) as SafeMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMath {
    return new Contract(address, _abi, signerOrProvider) as SafeMath;
  }
}
