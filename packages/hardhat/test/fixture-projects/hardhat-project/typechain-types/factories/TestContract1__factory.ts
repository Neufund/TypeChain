/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, BigNumberish } from "ethers";
import type { Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestContract1, TestContract1Interface } from "../TestContract1";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60806040526040518060400160405280600b81526020017f706c616365686f6c6465720000000000000000000000000000000000000000008152506001908051906020019061004f92919061009d565b5034801561005c57600080fd5b506040516101873803806101878339818101604052602081101561007f57600080fd5b8101908080519060200190929190505050806000819055505061013a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100de57805160ff191683800117855561010c565b8280016001018555821561010c579182015b8281111561010b5782518255916020019190600101906100f0565b5b509050610119919061011d565b5090565b5b8082111561013657600081600090555060010161011e565b5090565b603f806101486000396000f3fe6080604052600080fdfea26469706673582212208274cbc0682bfe2bc644f008ad113b08d9bf64a4e18e321bb8bd76acde65d11b64736f6c63430007030033";

type TestContract1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestContract1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestContract1__factory extends ContractFactory {
  constructor(...args: TestContract1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TestContract1";
  }

  deploy(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestContract1> {
    return super.deploy(_amount, overrides || {}) as Promise<TestContract1>;
  }
  getDeployTransaction(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_amount, overrides || {});
  }
  attach(address: string): TestContract1 {
    return super.attach(address) as TestContract1;
  }
  connect(signer: Signer): TestContract1__factory {
    return super.connect(signer) as TestContract1__factory;
  }
  static readonly contractName: "TestContract1";
  public readonly contractName: "TestContract1";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestContract1Interface {
    return new utils.Interface(_abi) as TestContract1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContract1 {
    return new Contract(address, _abi, signerOrProvider) as TestContract1;
  }
}
