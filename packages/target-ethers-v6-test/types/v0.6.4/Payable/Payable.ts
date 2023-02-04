/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
} from "ethers";
import type { ContractRunner } from "ethers/types/providers";

import type { Listener } from "ethers/src.ts/utils";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface PayableInterface extends Interface {
  getFunction(
    nameOrSignature: "non_payable_func" | "payable_func"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "non_payable_func",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "payable_func",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "non_payable_func",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payable_func",
    data: BytesLike
  ): Result;
}

export interface Payable extends BaseContract {
  connect(runner: null | ContractRunner): BaseContract;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PayableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  non_payable_func: TypedContractMethod<[], [void], "nonpayable">;

  payable_func: TypedContractMethod<[], [void], "payable">;

  getFunction(
    nameOrSignature: "non_payable_func"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "payable_func"
  ): TypedContractMethod<[], [void], "payable">;

  // TODO change this bucket to events once changed in ethers beta exports
  filters: {};
}
