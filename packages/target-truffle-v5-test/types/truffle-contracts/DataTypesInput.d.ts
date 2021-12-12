/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DataTypesInputContract
  extends Truffle.Contract<DataTypesInputInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DataTypesInputInstance>;
}

type AllEvents = never;

export interface DataTypesInputInstance extends Truffle.ContractInstance {
  input_uint8(
    input1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  input_uint256(
    input1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  input_int8(
    input1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  input_int256(
    input1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  input_bool(
    input1: boolean,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  input_address(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_bytes1(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_bytes(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_string(
    input1: string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  input_stat_array(
    input1: (number | BN | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  input_tuple(
    input1: number | BN | string,
    input2: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ 0: BN; 1: BN }>;

  input_struct(
    input1: {
      uint256_0: number | BN | string;
      uint256_1: number | BN | string;
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ uint256_0: BN; uint256_1: BN }>;

  input_enum(
    input1: number | BN | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN>;

  input_struct2(
    input1: {
      input1: number | BN | string;
      input2: {
        uint256_0: number | BN | string;
        uint256_1: number | BN | string;
      };
    },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }>;

  input_struct2_array(
    input1: {
      input1: number | BN | string;
      input2: {
        uint256_0: number | BN | string;
        uint256_1: number | BN | string;
      };
    }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }[]>;

  input_struct3_array(
    input1: { input1: (number | BN | string)[] }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ input1: BN[] }[]>;

  input_uint_array(
    input1: (number | BN | string)[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<BN[]>;

  input_struct2_tuple(
    input: {
      input1: number | BN | string;
      input2: {
        uint256_0: number | BN | string;
        uint256_1: number | BN | string;
      };
    }[],
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }[]>;

  input_multiple_structs_with_same_name(
    info1: { a: number | BN | string; b: number | BN | string },
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ a: string; b: string }>;

  methods: {
    input_uint8(
      input1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    input_uint256(
      input1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    input_int8(
      input1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    input_int256(
      input1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    input_bool(
      input1: boolean,
      txDetails?: Truffle.TransactionDetails
    ): Promise<boolean>;

    input_address(
      input1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    input_bytes1(
      input1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    input_bytes(
      input1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    input_string(
      input1: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    input_stat_array(
      input1: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    input_tuple(
      input1: number | BN | string,
      input2: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ 0: BN; 1: BN }>;

    input_struct(
      input1: {
        uint256_0: number | BN | string;
        uint256_1: number | BN | string;
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ uint256_0: BN; uint256_1: BN }>;

    input_enum(
      input1: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN>;

    input_struct2(
      input1: {
        input1: number | BN | string;
        input2: {
          uint256_0: number | BN | string;
          uint256_1: number | BN | string;
        };
      },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }>;

    input_struct2_array(
      input1: {
        input1: number | BN | string;
        input2: {
          uint256_0: number | BN | string;
          uint256_1: number | BN | string;
        };
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }[]>;

    input_struct3_array(
      input1: { input1: (number | BN | string)[] }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ input1: BN[] }[]>;

    input_uint_array(
      input1: (number | BN | string)[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<BN[]>;

    input_struct2_tuple(
      input: {
        input1: number | BN | string;
        input2: {
          uint256_0: number | BN | string;
          uint256_1: number | BN | string;
        };
      }[],
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ input1: BN; input2: { uint256_0: BN; uint256_1: BN } }[]>;

    input_multiple_structs_with_same_name(
      info1: { a: number | BN | string; b: number | BN | string },
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ a: string; b: string }>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
