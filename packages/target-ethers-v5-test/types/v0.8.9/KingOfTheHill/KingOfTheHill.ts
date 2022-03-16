/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace KingOfTheHill {
  export type BidStruct = { bidder: string; value: BigNumberish };

  export type BidStructOutput = [string, BigNumber] & {
    bidder: string;
    value: BigNumber;
  };
}

export interface KingOfTheHillInterface extends utils.Interface {
  contractName: "KingOfTheHill";

  functions: {
    "bid()": FunctionFragment;
    "highestBid()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "bid" | "highestBid" | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "highestBid",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "highestBid", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "HighestBidIncreased(tuple)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "HighestBidIncreased"): EventFragment;
}

export type HighestBidIncreasedEvent = TypedEvent<
  [KingOfTheHill.BidStructOutput],
  { bid: KingOfTheHill.BidStructOutput }
>;

export type HighestBidIncreasedEventFilter =
  TypedEventFilter<HighestBidIncreasedEvent>;

export interface KingOfTheHill extends BaseContract {
  contractName: "KingOfTheHill";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KingOfTheHillInterface;

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
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    highestBid(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { bidder: string; value: BigNumber }>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  bid(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  highestBid(
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { bidder: string; value: BigNumber }>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    bid(overrides?: CallOverrides): Promise<void>;

    highestBid(
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { bidder: string; value: BigNumber }>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "HighestBidIncreased(tuple)"(bid?: null): HighestBidIncreasedEventFilter;
    HighestBidIncreased(bid?: null): HighestBidIncreasedEventFilter;
  };

  estimateGas: {
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    highestBid(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bid(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    highestBid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
