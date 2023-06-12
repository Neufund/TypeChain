/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export declare namespace Issue552_Observer {
  export type ObservationStruct =
    | [number | string | BN, number | string | BN]
    | { val: number | string | BN; blockTimestamp: number | string | BN };

  export type ObservationStructOutputArray = [string, string];
  export type ObservationStructOutputStruct = {
    val: string;
    blockTimestamp: string;
  };
  export type ObservationStructOutput = ObservationStructOutputArray &
    ObservationStructOutputStruct;
}

export declare namespace Issue552_Reproduction {
  export type ObservationParamsStruct =
    | [Issue552_Observer.ObservationStruct[], number | string | BN]
    | {
        observations: Issue552_Observer.ObservationStruct[];
        index: number | string | BN;
      };

  export type ObservationParamsStructOutputArray = [
    Issue552_Observer.ObservationStructOutput[],
    string
  ];
  export type ObservationParamsStructOutputStruct = {
    observations: Issue552_Observer.ObservationStructOutput[];
    index: string;
  };
  export type ObservationParamsStructOutput =
    ObservationParamsStructOutputArray & ObservationParamsStructOutputStruct;
}

export interface Issue552_Reproduction extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): Issue552_Reproduction;
  clone(): Issue552_Reproduction;
  methods: {
    bars(
      arg0: number | string | BN
    ): NonPayableTransactionObject<Issue552_Reproduction.ObservationParamsStructOutput>;

    input(values: number | string | BN[]): NonPayableTransactionObject<void>;

    makeObservation(
      barId: number | string | BN,
      newVal: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}
