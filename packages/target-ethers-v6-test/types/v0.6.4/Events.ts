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
  EventFragment,
} from "ethers";
import type { ContractRunner } from "ethers/types/providers";

import type { Listener } from "ethers/src.ts/utils";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Events {
  export type EventDataStruct = { index: BigNumberish; name: string };

  export type EventDataStructOutput = [bigint, string] & {
    index: bigint;
    name: string;
  };
}

export interface EventsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "emit_anon1"
      | "emit_event1"
      | "emit_event2"
      | "emit_event3"
      | "emit_event3_overloaded"
      | "emit_event4"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AnonEvent1"
      | "Event1"
      | "Event2"
      | "Event3(bool,uint256)"
      | "Event3(uint256)"
      | "Event4"
      | "NoArgsEvent"
      | "UpdateFrequencySet"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "emit_anon1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3_overloaded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event4",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emit_anon1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emit_event1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3_overloaded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event4",
    data: BytesLike
  ): Result;
}

export namespace AnonEvent1Event {
  export type InputTuple = [value1: BigNumberish];
  export type OutputTuple = [value1: bigint];
  export interface OutputObject {
    value1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace Event1Event {
  export type InputTuple = [value1: BigNumberish, value2: BigNumberish];
  export type OutputTuple = [value1: bigint, value2: bigint];
  export interface OutputObject {
    value1: bigint;
    value2: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace Event2Event {
  export type InputTuple = [arg0: BigNumberish];
  export type OutputTuple = [arg0: bigint];
  export interface OutputObject {
    arg0: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace Event3_bool_uint256_Event {
  export type InputTuple = [value1: boolean, value2: BigNumberish];
  export type OutputTuple = [value1: boolean, value2: bigint];
  export interface OutputObject {
    value1: boolean;
    value2: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace Event3_uint256_Event {
  export type InputTuple = [value1: BigNumberish];
  export type OutputTuple = [value1: bigint];
  export interface OutputObject {
    value1: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace Event4Event {
  export type InputTuple = [data: Events.EventDataStruct];
  export type OutputTuple = [data: Events.EventDataStructOutput];
  export interface OutputObject {
    data: Events.EventDataStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace NoArgsEventEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export namespace UpdateFrequencySetEvent {
  export type InputTuple = [arg0: string[], arg1: BigNumberish[]];
  export type OutputTuple = [arg0: string[], arg1: bigint[]];
  export interface OutputObject {
    arg0: string[];
    arg1: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
}

export interface Events extends BaseContract {
  connect(runner: null | ContractRunner): BaseContract;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EventsInterface;

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

  emit_anon1: TypedContractMethod<[], [void], "nonpayable">;

  emit_event1: TypedContractMethod<[], [void], "nonpayable">;

  emit_event2: TypedContractMethod<[], [void], "nonpayable">;

  emit_event3: TypedContractMethod<[], [void], "nonpayable">;

  emit_event3_overloaded: TypedContractMethod<[], [void], "nonpayable">;

  emit_event4: TypedContractMethod<[], [void], "nonpayable">;

  getFunction(
    nameOrSignature: "emit_anon1"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "emit_event1"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "emit_event2"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "emit_event3"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "emit_event3_overloaded"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "emit_event4"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "AnonEvent1"
  ): TypedContractEvent<
    AnonEvent1Event.InputTuple,
    AnonEvent1Event.OutputTuple,
    AnonEvent1Event.OutputObject
  >;
  getEvent(
    key: "Event1"
  ): TypedContractEvent<
    Event1Event.InputTuple,
    Event1Event.OutputTuple,
    Event1Event.OutputObject
  >;
  getEvent(
    key: "Event2"
  ): TypedContractEvent<
    Event2Event.InputTuple,
    Event2Event.OutputTuple,
    Event2Event.OutputObject
  >;
  getEvent(
    key: "Event3(bool,uint256)"
  ): TypedContractEvent<
    Event3_bool_uint256_Event.InputTuple,
    Event3_bool_uint256_Event.OutputTuple,
    Event3_bool_uint256_Event.OutputObject
  >;
  getEvent(
    key: "Event3(uint256)"
  ): TypedContractEvent<
    Event3_uint256_Event.InputTuple,
    Event3_uint256_Event.OutputTuple,
    Event3_uint256_Event.OutputObject
  >;
  getEvent(
    key: "Event4"
  ): TypedContractEvent<
    Event4Event.InputTuple,
    Event4Event.OutputTuple,
    Event4Event.OutputObject
  >;
  getEvent(
    key: "NoArgsEvent"
  ): TypedContractEvent<
    NoArgsEventEvent.InputTuple,
    NoArgsEventEvent.OutputTuple,
    NoArgsEventEvent.OutputObject
  >;
  getEvent(
    key: "UpdateFrequencySet"
  ): TypedContractEvent<
    UpdateFrequencySetEvent.InputTuple,
    UpdateFrequencySetEvent.OutputTuple,
    UpdateFrequencySetEvent.OutputObject
  >;

  filters: {
    "AnonEvent1(uint256)": TypedContractEvent<
      AnonEvent1Event.InputTuple,
      AnonEvent1Event.OutputTuple,
      AnonEvent1Event.OutputObject
    >;
    AnonEvent1: TypedContractEvent<
      AnonEvent1Event.InputTuple,
      AnonEvent1Event.OutputTuple,
      AnonEvent1Event.OutputObject
    >;

    "Event1(uint256,uint256)": TypedContractEvent<
      Event1Event.InputTuple,
      Event1Event.OutputTuple,
      Event1Event.OutputObject
    >;
    Event1: TypedContractEvent<
      Event1Event.InputTuple,
      Event1Event.OutputTuple,
      Event1Event.OutputObject
    >;

    "Event2(uint256)": TypedContractEvent<
      Event2Event.InputTuple,
      Event2Event.OutputTuple,
      Event2Event.OutputObject
    >;
    Event2: TypedContractEvent<
      Event2Event.InputTuple,
      Event2Event.OutputTuple,
      Event2Event.OutputObject
    >;

    "Event3(bool,uint256)": TypedContractEvent<
      Event3_bool_uint256_Event.InputTuple,
      Event3_bool_uint256_Event.OutputTuple,
      Event3_bool_uint256_Event.OutputObject
    >;
    "Event3(uint256)": TypedContractEvent<
      Event3_uint256_Event.InputTuple,
      Event3_uint256_Event.OutputTuple,
      Event3_uint256_Event.OutputObject
    >;

    "Event4(tuple)": TypedContractEvent<
      Event4Event.InputTuple,
      Event4Event.OutputTuple,
      Event4Event.OutputObject
    >;
    Event4: TypedContractEvent<
      Event4Event.InputTuple,
      Event4Event.OutputTuple,
      Event4Event.OutputObject
    >;

    "NoArgsEvent()": TypedContractEvent<
      NoArgsEventEvent.InputTuple,
      NoArgsEventEvent.OutputTuple,
      NoArgsEventEvent.OutputObject
    >;
    NoArgsEvent: TypedContractEvent<
      NoArgsEventEvent.InputTuple,
      NoArgsEventEvent.OutputTuple,
      NoArgsEventEvent.OutputObject
    >;

    "UpdateFrequencySet(address[],uint256[])": TypedContractEvent<
      UpdateFrequencySetEvent.InputTuple,
      UpdateFrequencySetEvent.OutputTuple,
      UpdateFrequencySetEvent.OutputObject
    >;
    UpdateFrequencySet: TypedContractEvent<
      UpdateFrequencySetEvent.InputTuple,
      UpdateFrequencySetEvent.OutputTuple,
      UpdateFrequencySetEvent.OutputObject
    >;
  };
}
