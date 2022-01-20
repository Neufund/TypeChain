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

export declare namespace StructsLib1 {
  export type InfoStruct = { a: BigNumberish; b: BigNumberish };

  export type InfoStructOutput = [BigNumber, BigNumber] & {
    a: BigNumber;
    b: BigNumber;
  };
}

export declare namespace StructsLib2 {
  export type InfoStruct = { a: string; b: string };

  export type InfoStructOutput = [string, string] & { a: string; b: string };
}

export declare namespace DataTypesInput {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [BigNumber, BigNumber] & {
    uint256_0: BigNumber;
    uint256_1: BigNumber;
  };

  export type Struct2Struct = {
    input1: BigNumberish;
    input2: DataTypesInput.Struct1Struct;
  };

  export type Struct2StructOutput = [
    BigNumber,
    DataTypesInput.Struct1StructOutput
  ] & { input1: BigNumber; input2: DataTypesInput.Struct1StructOutput };

  export type Struct3Struct = { input1: BigNumberish[] };

  export type Struct3StructOutput = [BigNumber[]] & { input1: BigNumber[] };
}

export interface DataTypesInputInterface extends utils.Interface {
  contractName: "DataTypesInput";
  functions: {
    "input_address(address)": FunctionFragment;
    "input_bool(bool)": FunctionFragment;
    "input_bytes(bytes)": FunctionFragment;
    "input_bytes1(bytes1)": FunctionFragment;
    "input_enum(uint8)": FunctionFragment;
    "input_int256(int256)": FunctionFragment;
    "input_int8(int8)": FunctionFragment;
    "input_multiple_structs_with_same_name((uint160,uint160))": FunctionFragment;
    "input_stat_array(uint8[3])": FunctionFragment;
    "input_string(string)": FunctionFragment;
    "input_struct((uint256,uint256))": FunctionFragment;
    "input_struct2((uint256,(uint256,uint256)))": FunctionFragment;
    "input_struct2_array((uint256,(uint256,uint256))[])": FunctionFragment;
    "input_struct2_tuple(tuple[3])": FunctionFragment;
    "input_struct3_array((uint256[])[])": FunctionFragment;
    "input_tuple(uint256,uint256)": FunctionFragment;
    "input_uint256(uint256)": FunctionFragment;
    "input_uint8(uint8)": FunctionFragment;
    "input_uint_array(uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "input_address",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "input_bool", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "input_bytes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "input_bytes1",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "input_enum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_int256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_int8",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_multiple_structs_with_same_name",
    values: [StructsLib1.InfoStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "input_stat_array",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_string",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct",
    values: [DataTypesInput.Struct1Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct2",
    values: [DataTypesInput.Struct2Struct]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct2_array",
    values: [DataTypesInput.Struct2Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct2_tuple",
    values: [
      [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct3_array",
    values: [DataTypesInput.Struct3Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_tuple",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_uint256",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_uint8",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "input_uint_array",
    values: [BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "input_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_bool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_bytes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "input_int8", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "input_multiple_structs_with_same_name",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct2_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct2_tuple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct3_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_tuple",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_uint8",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_uint_array",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DataTypesInput extends BaseContract {
  contractName: "DataTypesInput";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DataTypesInputInterface;

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
    input_address(input1: string, overrides?: CallOverrides): Promise<[string]>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<[boolean]>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    input_multiple_structs_with_same_name(
      info1: StructsLib1.InfoStruct,
      overrides?: CallOverrides
    ): Promise<
      [StructsLib2.InfoStructOutput] & { info2: StructsLib2.InfoStructOutput }
    >;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[[number, number, number]]>;

    input_string(input1: string, overrides?: CallOverrides): Promise<[string]>;

    input_struct(
      input1: DataTypesInput.Struct1Struct,
      overrides?: CallOverrides
    ): Promise<[DataTypesInput.Struct1StructOutput]>;

    input_struct2(
      input1: DataTypesInput.Struct2Struct,
      overrides?: CallOverrides
    ): Promise<[DataTypesInput.Struct2StructOutput]>;

    input_struct2_array(
      input1: DataTypesInput.Struct2Struct[],
      overrides?: CallOverrides
    ): Promise<[DataTypesInput.Struct2StructOutput[]]>;

    input_struct2_tuple(
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ],
      overrides?: CallOverrides
    ): Promise<
      [
        [
          DataTypesInput.Struct2StructOutput,
          DataTypesInput.Struct2StructOutput,
          DataTypesInput.Struct2StructOutput
        ]
      ]
    >;

    input_struct3_array(
      input1: DataTypesInput.Struct3Struct[],
      overrides?: CallOverrides
    ): Promise<[DataTypesInput.Struct3StructOutput[]]>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    input_uint_array(
      input1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;
  };

  input_address(input1: string, overrides?: CallOverrides): Promise<string>;

  input_bool(input1: boolean, overrides?: CallOverrides): Promise<boolean>;

  input_bytes(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

  input_bytes1(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

  input_enum(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  input_int256(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  input_int8(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  input_multiple_structs_with_same_name(
    info1: StructsLib1.InfoStruct,
    overrides?: CallOverrides
  ): Promise<StructsLib2.InfoStructOutput>;

  input_stat_array(
    input1: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<[number, number, number]>;

  input_string(input1: string, overrides?: CallOverrides): Promise<string>;

  input_struct(
    input1: DataTypesInput.Struct1Struct,
    overrides?: CallOverrides
  ): Promise<DataTypesInput.Struct1StructOutput>;

  input_struct2(
    input1: DataTypesInput.Struct2Struct,
    overrides?: CallOverrides
  ): Promise<DataTypesInput.Struct2StructOutput>;

  input_struct2_array(
    input1: DataTypesInput.Struct2Struct[],
    overrides?: CallOverrides
  ): Promise<DataTypesInput.Struct2StructOutput[]>;

  input_struct2_tuple(
    input: [
      DataTypesInput.Struct2Struct,
      DataTypesInput.Struct2Struct,
      DataTypesInput.Struct2Struct
    ],
    overrides?: CallOverrides
  ): Promise<
    [
      DataTypesInput.Struct2StructOutput,
      DataTypesInput.Struct2StructOutput,
      DataTypesInput.Struct2StructOutput
    ]
  >;

  input_struct3_array(
    input1: DataTypesInput.Struct3Struct[],
    overrides?: CallOverrides
  ): Promise<DataTypesInput.Struct3StructOutput[]>;

  input_tuple(
    input1: BigNumberish,
    input2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  input_uint256(
    input1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  input_uint8(input1: BigNumberish, overrides?: CallOverrides): Promise<number>;

  input_uint_array(
    input1: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    input_address(input1: string, overrides?: CallOverrides): Promise<string>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<boolean>;

    input_bytes(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

    input_bytes1(input1: BytesLike, overrides?: CallOverrides): Promise<string>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    input_multiple_structs_with_same_name(
      info1: StructsLib1.InfoStruct,
      overrides?: CallOverrides
    ): Promise<StructsLib2.InfoStructOutput>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[number, number, number]>;

    input_string(input1: string, overrides?: CallOverrides): Promise<string>;

    input_struct(
      input1: DataTypesInput.Struct1Struct,
      overrides?: CallOverrides
    ): Promise<DataTypesInput.Struct1StructOutput>;

    input_struct2(
      input1: DataTypesInput.Struct2Struct,
      overrides?: CallOverrides
    ): Promise<DataTypesInput.Struct2StructOutput>;

    input_struct2_array(
      input1: DataTypesInput.Struct2Struct[],
      overrides?: CallOverrides
    ): Promise<DataTypesInput.Struct2StructOutput[]>;

    input_struct2_tuple(
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ],
      overrides?: CallOverrides
    ): Promise<
      [
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput
      ]
    >;

    input_struct3_array(
      input1: DataTypesInput.Struct3Struct[],
      overrides?: CallOverrides
    ): Promise<DataTypesInput.Struct3StructOutput[]>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    input_uint_array(
      input1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    input_address(
      input1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_bool(input1: boolean, overrides?: CallOverrides): Promise<BigNumber>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_multiple_structs_with_same_name(
      info1: StructsLib1.InfoStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_string(input1: string, overrides?: CallOverrides): Promise<BigNumber>;

    input_struct(
      input1: DataTypesInput.Struct1Struct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_struct2(
      input1: DataTypesInput.Struct2Struct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_struct2_array(
      input1: DataTypesInput.Struct2Struct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_struct2_tuple(
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_struct3_array(
      input1: DataTypesInput.Struct3Struct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    input_uint_array(
      input1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    input_address(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bool(
      input1: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bytes(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_bytes1(
      input1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_enum(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_int256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_int8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_multiple_structs_with_same_name(
      info1: StructsLib1.InfoStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_stat_array(
      input1: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_string(
      input1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct(
      input1: DataTypesInput.Struct1Struct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct2(
      input1: DataTypesInput.Struct2Struct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct2_array(
      input1: DataTypesInput.Struct2Struct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct2_tuple(
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_struct3_array(
      input1: DataTypesInput.Struct3Struct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_tuple(
      input1: BigNumberish,
      input2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_uint256(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_uint8(
      input1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    input_uint_array(
      input1: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
