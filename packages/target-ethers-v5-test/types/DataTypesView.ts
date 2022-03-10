/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace DataTypesView {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [BigNumber, BigNumber] & {
    uint256_0: BigNumber;
    uint256_1: BigNumber;
  };
}

export interface DataTypesViewInterface extends utils.Interface {
  contractName: "DataTypesView";

  functions: {
    "view_address()": FunctionFragment;
    "view_bool()": FunctionFragment;
    "view_bytes()": FunctionFragment;
    "view_bytes1()": FunctionFragment;
    "view_enum()": FunctionFragment;
    "view_int256()": FunctionFragment;
    "view_int8()": FunctionFragment;
    "view_named()": FunctionFragment;
    "view_stat_array()": FunctionFragment;
    "view_string()": FunctionFragment;
    "view_struct()": FunctionFragment;
    "view_tuple()": FunctionFragment;
    "view_uint256()": FunctionFragment;
    "view_uint8()": FunctionFragment;
  };

  events: {};

  getFunction(
    nameOrSignatureOrTopic:
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
  contractName: "DataTypesView";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataTypesViewInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    view_address(overrides?: CallOverrides): Promise<[string]>;

    view_bool(overrides?: CallOverrides): Promise<[boolean]>;

    view_bytes(overrides?: CallOverrides): Promise<[string]>;

    view_bytes1(overrides?: CallOverrides): Promise<[string]>;

    view_enum(overrides?: CallOverrides): Promise<[number]>;

    view_int256(overrides?: CallOverrides): Promise<[BigNumber]>;

    view_int8(overrides?: CallOverrides): Promise<[number]>;

    view_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    view_stat_array(
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    view_string(overrides?: CallOverrides): Promise<[string]>;

    view_struct(
      overrides?: CallOverrides
    ): Promise<[DataTypesView.Struct1StructOutput]>;

    view_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    view_uint256(overrides?: CallOverrides): Promise<[BigNumber]>;

    view_uint8(overrides?: CallOverrides): Promise<[number]>;
  };

  view_address(overrides?: CallOverrides): Promise<string>;

  view_bool(overrides?: CallOverrides): Promise<boolean>;

  view_bytes(overrides?: CallOverrides): Promise<string>;

  view_bytes1(overrides?: CallOverrides): Promise<string>;

  view_enum(overrides?: CallOverrides): Promise<number>;

  view_int256(overrides?: CallOverrides): Promise<BigNumber>;

  view_int8(overrides?: CallOverrides): Promise<number>;

  view_named(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
  >;

  view_stat_array(overrides?: CallOverrides): Promise<[number, number, number]>;

  view_string(overrides?: CallOverrides): Promise<string>;

  view_struct(
    overrides?: CallOverrides
  ): Promise<DataTypesView.Struct1StructOutput>;

  view_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  view_uint256(overrides?: CallOverrides): Promise<BigNumber>;

  view_uint8(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    view_address(overrides?: CallOverrides): Promise<string>;

    view_bool(overrides?: CallOverrides): Promise<boolean>;

    view_bytes(overrides?: CallOverrides): Promise<string>;

    view_bytes1(overrides?: CallOverrides): Promise<string>;

    view_enum(overrides?: CallOverrides): Promise<number>;

    view_int256(overrides?: CallOverrides): Promise<BigNumber>;

    view_int8(overrides?: CallOverrides): Promise<number>;

    view_named(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uint256_1: BigNumber; uint256_2: BigNumber }
    >;

    view_stat_array(
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    view_string(overrides?: CallOverrides): Promise<string>;

    view_struct(
      overrides?: CallOverrides
    ): Promise<DataTypesView.Struct1StructOutput>;

    view_tuple(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    view_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    view_uint8(overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    view_address(overrides?: CallOverrides): Promise<BigNumber>;

    view_bool(overrides?: CallOverrides): Promise<BigNumber>;

    view_bytes(overrides?: CallOverrides): Promise<BigNumber>;

    view_bytes1(overrides?: CallOverrides): Promise<BigNumber>;

    view_enum(overrides?: CallOverrides): Promise<BigNumber>;

    view_int256(overrides?: CallOverrides): Promise<BigNumber>;

    view_int8(overrides?: CallOverrides): Promise<BigNumber>;

    view_named(overrides?: CallOverrides): Promise<BigNumber>;

    view_stat_array(overrides?: CallOverrides): Promise<BigNumber>;

    view_string(overrides?: CallOverrides): Promise<BigNumber>;

    view_struct(overrides?: CallOverrides): Promise<BigNumber>;

    view_tuple(overrides?: CallOverrides): Promise<BigNumber>;

    view_uint256(overrides?: CallOverrides): Promise<BigNumber>;

    view_uint8(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    view_address(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_bool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_bytes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_bytes1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_enum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_int256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_int8(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_named(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_stat_array(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_string(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_struct(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_tuple(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_uint256(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    view_uint8(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
