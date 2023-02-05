/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
} from "ethers";
import type { ContractRunner } from "ethers/providers";
import type { ContractMethod } from "ethers/contract";
import type { Listener } from "ethers/utils";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace DataTypesView {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [uint256_0: bigint, uint256_1: bigint] & {
    uint256_0: bigint;
    uint256_1: bigint;
  };
}

export interface DataTypesViewInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "view_address"
      | "view_bool"
      | "view_bytes"
      | "view_bytes1"
      | "view_enum"
      | "view_int256"
      | "view_int8"
      | "view_named"
      | "view_stat_array"
      | "view_string"
      | "view_struct"
      | "view_tuple"
      | "view_uint256"
      | "view_uint8"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "view_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "view_bool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "view_bytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_bytes1",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "view_enum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "view_int256",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "view_int8", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "view_named",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_stat_array",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_string",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_struct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_tuple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_uint256",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "view_uint8",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "view_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "view_bool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "view_bytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "view_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "view_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "view_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "view_int8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "view_named", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "view_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "view_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "view_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "view_tuple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "view_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "view_uint8", data: BytesLike): Result;
}

export interface DataTypesView extends BaseContract {
  connect(runner: null | ContractRunner): BaseContract;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataTypesViewInterface;

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

  view_address: TypedContractMethod<[], [string], "view">;

  view_bool: TypedContractMethod<[], [boolean], "view">;

  view_bytes: TypedContractMethod<[], [string], "view">;

  view_bytes1: TypedContractMethod<[], [string], "view">;

  view_enum: TypedContractMethod<[], [bigint], "view">;

  view_int256: TypedContractMethod<[], [bigint], "view">;

  view_int8: TypedContractMethod<[], [bigint], "view">;

  view_named: TypedContractMethod<
    [],
    [[bigint, bigint] & { uint256_1: bigint; uint256_2: bigint }],
    "view"
  >;

  view_stat_array: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  view_string: TypedContractMethod<[], [string], "view">;

  view_struct: TypedContractMethod<
    [],
    [DataTypesView.Struct1StructOutput],
    "view"
  >;

  view_tuple: TypedContractMethod<[], [[bigint, bigint]], "view">;

  view_uint256: TypedContractMethod<[], [bigint], "view">;

  view_uint8: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "view_address"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "view_bool"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "view_bytes"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "view_bytes1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "view_enum"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "view_int256"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "view_int8"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "view_named"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { uint256_1: bigint; uint256_2: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "view_stat_array"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "view_string"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "view_struct"
  ): TypedContractMethod<[], [DataTypesView.Struct1StructOutput], "view">;
  getFunction(
    nameOrSignature: "view_tuple"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "view_uint256"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "view_uint8"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
