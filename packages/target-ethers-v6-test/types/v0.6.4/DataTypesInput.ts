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
import type { AddressLike } from "ethers/address";
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

export declare namespace StructsLib1 {
  export type InfoStruct = { a: BigNumberish; b: BigNumberish };

  export type InfoStructOutput = [a: bigint, b: bigint] & {
    a: bigint;
    b: bigint;
  };
}

export declare namespace StructsLib2 {
  export type InfoStruct = { a: AddressLike; b: AddressLike };

  export type InfoStructOutput = [a: string, b: string] & {
    a: string;
    b: string;
  };
}

export declare namespace DataTypesInput {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [uint256_0: bigint, uint256_1: bigint] & {
    uint256_0: bigint;
    uint256_1: bigint;
  };

  export type Struct2Struct = {
    input1: BigNumberish;
    input2: DataTypesInput.Struct1Struct;
  };

  export type Struct2StructOutput = [
    input1: bigint,
    input2: DataTypesInput.Struct1StructOutput
  ] & { input1: bigint; input2: DataTypesInput.Struct1StructOutput };

  export type Struct3Struct = { input1: BigNumberish[] };

  export type Struct3StructOutput = [input1: bigint[]] & { input1: bigint[] };
}

export interface DataTypesInputInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "input_address"
      | "input_bool"
      | "input_bytes"
      | "input_bytes1"
      | "input_enum"
      | "input_fixedarray_array_fixedarray"
      | "input_int256"
      | "input_int8"
      | "input_multiple_structs_with_same_name"
      | "input_stat_array"
      | "input_string"
      | "input_struct"
      | "input_struct2"
      | "input_struct2_array"
      | "input_struct2_tuple"
      | "input_struct3_array"
      | "input_struct_array"
      | "input_struct_array_array"
      | "input_struct_array_array_array"
      | "input_struct_array_fixedarray"
      | "input_struct_fixedarray_array"
      | "input_struct_fixedarray_array_fixedarray"
      | "input_struct_fixedarray_array_fixedarray_array_fixedarray"
      | "input_struct_fixedarray_fixedarray"
      | "input_tuple"
      | "input_uint256"
      | "input_uint8"
      | "input_uint_array"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "input_address",
    values: [AddressLike]
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
    functionFragment: "input_fixedarray_array_fixedarray",
    values: [
      [
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][]
      ]
    ]
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
    functionFragment: "input_struct_array",
    values: [DataTypesInput.Struct1Struct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_array_array",
    values: [DataTypesInput.Struct1Struct[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_array_array_array",
    values: [DataTypesInput.Struct1Struct[][][]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_array_fixedarray",
    values: [[DataTypesInput.Struct1Struct[], DataTypesInput.Struct1Struct[]]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_fixedarray_array",
    values: [[DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_fixedarray_array_fixedarray",
    values: [
      [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_fixedarray_array_fixedarray_array_fixedarray",
    values: [
      [
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][]
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "input_struct_fixedarray_fixedarray",
    values: [
      [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct]
      ]
    ]
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
    functionFragment: "input_fixedarray_array_fixedarray",
    data: BytesLike
  ): Result;
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
    functionFragment: "input_struct_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_array_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_array_array_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_array_fixedarray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_fixedarray_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_fixedarray_array_fixedarray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_fixedarray_array_fixedarray_array_fixedarray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "input_struct_fixedarray_fixedarray",
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
}

export interface DataTypesInput extends BaseContract {
  connect(runner?: ContractRunner | null): BaseContract;
  attach(addressOrName: AddressLike): this;
  deployed(): Promise<this>;

  interface: DataTypesInputInterface;

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

  input_address: TypedContractMethod<[input1: AddressLike], [string], "view">;

  input_bool: TypedContractMethod<[input1: boolean], [boolean], "view">;

  input_bytes: TypedContractMethod<[input1: BytesLike], [string], "view">;

  input_bytes1: TypedContractMethod<[input1: BytesLike], [string], "view">;

  input_enum: TypedContractMethod<[input1: BigNumberish], [bigint], "view">;

  input_fixedarray_array_fixedarray: TypedContractMethod<
    [
      input1: [
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][]
      ]
    ],
    [
      [
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][]
      ]
    ],
    "view"
  >;

  input_int256: TypedContractMethod<[input1: BigNumberish], [bigint], "view">;

  input_int8: TypedContractMethod<[input1: BigNumberish], [bigint], "view">;

  input_multiple_structs_with_same_name: TypedContractMethod<
    [info1: StructsLib1.InfoStruct],
    [StructsLib2.InfoStructOutput],
    "view"
  >;

  input_stat_array: TypedContractMethod<
    [input1: [BigNumberish, BigNumberish, BigNumberish]],
    [[bigint, bigint, bigint]],
    "view"
  >;

  input_string: TypedContractMethod<[input1: string], [string], "view">;

  input_struct: TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct],
    [DataTypesInput.Struct1StructOutput],
    "view"
  >;

  input_struct2: TypedContractMethod<
    [input1: DataTypesInput.Struct2Struct],
    [DataTypesInput.Struct2StructOutput],
    "view"
  >;

  input_struct2_array: TypedContractMethod<
    [input1: DataTypesInput.Struct2Struct[]],
    [DataTypesInput.Struct2StructOutput[]],
    "view"
  >;

  input_struct2_tuple: TypedContractMethod<
    [
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ]
    ],
    [
      [
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput
      ]
    ],
    "view"
  >;

  input_struct3_array: TypedContractMethod<
    [input1: DataTypesInput.Struct3Struct[]],
    [DataTypesInput.Struct3StructOutput[]],
    "view"
  >;

  input_struct_array: TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[]],
    [DataTypesInput.Struct1StructOutput[]],
    "view"
  >;

  input_struct_array_array: TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[][]],
    [DataTypesInput.Struct1StructOutput[][]],
    "view"
  >;

  input_struct_array_array_array: TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[][][]],
    [DataTypesInput.Struct1StructOutput[][][]],
    "view"
  >;

  input_struct_array_fixedarray: TypedContractMethod<
    [input1: [DataTypesInput.Struct1Struct[], DataTypesInput.Struct1Struct[]]],
    [
      [
        DataTypesInput.Struct1StructOutput[],
        DataTypesInput.Struct1StructOutput[]
      ]
    ],
    "view"
  >;

  input_struct_fixedarray_array: TypedContractMethod<
    [input1: [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]],
    [
      [DataTypesInput.Struct1StructOutput, DataTypesInput.Struct1StructOutput][]
    ],
    "view"
  >;

  input_struct_fixedarray_array_fixedarray: TypedContractMethod<
    [
      input1: [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
      ]
    ],
    [
      [
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][]
      ]
    ],
    "view"
  >;

  input_struct_fixedarray_array_fixedarray_array_fixedarray: TypedContractMethod<
    [
      input1: [
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][]
      ]
    ],
    [
      [
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][]
      ]
    ],
    "view"
  >;

  input_struct_fixedarray_fixedarray: TypedContractMethod<
    [
      input1: [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct]
      ]
    ],
    [
      [
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ],
        [DataTypesInput.Struct1StructOutput, DataTypesInput.Struct1StructOutput]
      ]
    ],
    "view"
  >;

  input_tuple: TypedContractMethod<
    [input1: BigNumberish, input2: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;

  input_uint256: TypedContractMethod<[input1: BigNumberish], [bigint], "view">;

  input_uint8: TypedContractMethod<[input1: BigNumberish], [bigint], "view">;

  input_uint_array: TypedContractMethod<
    [input1: BigNumberish[]],
    [bigint[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "input_address"
  ): TypedContractMethod<[input1: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "input_bool"
  ): TypedContractMethod<[input1: boolean], [boolean], "view">;
  getFunction(
    nameOrSignature: "input_bytes"
  ): TypedContractMethod<[input1: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "input_bytes1"
  ): TypedContractMethod<[input1: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "input_enum"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "input_fixedarray_array_fixedarray"
  ): TypedContractMethod<
    [
      input1: [
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][],
        [BigNumberish, BigNumberish, BigNumberish][]
      ]
    ],
    [
      [
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][],
        [bigint, bigint, bigint][]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_int256"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "input_int8"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "input_multiple_structs_with_same_name"
  ): TypedContractMethod<
    [info1: StructsLib1.InfoStruct],
    [StructsLib2.InfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_stat_array"
  ): TypedContractMethod<
    [input1: [BigNumberish, BigNumberish, BigNumberish]],
    [[bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_string"
  ): TypedContractMethod<[input1: string], [string], "view">;
  getFunction(
    nameOrSignature: "input_struct"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct],
    [DataTypesInput.Struct1StructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct2"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct2Struct],
    [DataTypesInput.Struct2StructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct2_array"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct2Struct[]],
    [DataTypesInput.Struct2StructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct2_tuple"
  ): TypedContractMethod<
    [
      input: [
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct,
        DataTypesInput.Struct2Struct
      ]
    ],
    [
      [
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput,
        DataTypesInput.Struct2StructOutput
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct3_array"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct3Struct[]],
    [DataTypesInput.Struct3StructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_array"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[]],
    [DataTypesInput.Struct1StructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_array_array"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[][]],
    [DataTypesInput.Struct1StructOutput[][]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_array_array_array"
  ): TypedContractMethod<
    [input1: DataTypesInput.Struct1Struct[][][]],
    [DataTypesInput.Struct1StructOutput[][][]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_array_fixedarray"
  ): TypedContractMethod<
    [input1: [DataTypesInput.Struct1Struct[], DataTypesInput.Struct1Struct[]]],
    [
      [
        DataTypesInput.Struct1StructOutput[],
        DataTypesInput.Struct1StructOutput[]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_fixedarray_array"
  ): TypedContractMethod<
    [input1: [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]],
    [
      [DataTypesInput.Struct1StructOutput, DataTypesInput.Struct1StructOutput][]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_fixedarray_array_fixedarray"
  ): TypedContractMethod<
    [
      input1: [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
      ]
    ],
    [
      [
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ][]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_fixedarray_array_fixedarray_array_fixedarray"
  ): TypedContractMethod<
    [
      input1: [
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][],
        [
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][],
          [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct][]
        ][]
      ]
    ],
    [
      [
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][],
        [
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][],
          [
            DataTypesInput.Struct1StructOutput,
            DataTypesInput.Struct1StructOutput
          ][]
        ][]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_struct_fixedarray_fixedarray"
  ): TypedContractMethod<
    [
      input1: [
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct],
        [DataTypesInput.Struct1Struct, DataTypesInput.Struct1Struct]
      ]
    ],
    [
      [
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ],
        [
          DataTypesInput.Struct1StructOutput,
          DataTypesInput.Struct1StructOutput
        ],
        [DataTypesInput.Struct1StructOutput, DataTypesInput.Struct1StructOutput]
      ]
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_tuple"
  ): TypedContractMethod<
    [input1: BigNumberish, input2: BigNumberish],
    [[bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "input_uint256"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "input_uint8"
  ): TypedContractMethod<[input1: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "input_uint_array"
  ): TypedContractMethod<[input1: BigNumberish[]], [bigint[]], "view">;

  filters: {};
}
