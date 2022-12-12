/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Contract,
  EstimateFeeDetails,
  number,
  Overrides,
  InvokeTransactionResponse,
  Invocation,
  EstimateFeeResponse,
} from "starknet";
type CallOptions = { blockIdentifier: EstimateFeeDetails["blockIdentifier"] };
type BigNumberish = number.BigNumberish;
type BN = ReturnType<typeof number.toBN>;

export interface ERC20 extends Contract {
  decimals(options?: CallOptions): Promise<[BN] & { res: BN }>;
  get_total_supply(options?: CallOptions): Promise<[BN] & { res: BN }>;
  balance_of(
    user: BigNumberish,
    options?: CallOptions
  ): Promise<[BN] & { res: BN }>;
  allowance(
    owner: BigNumberish,
    spender: BigNumberish,
    options?: CallOptions
  ): Promise<[BN] & { res: BN }>;
  initialize(options?: Overrides): Promise<InvokeTransactionResponse>;
  mint(
    recipient: BigNumberish,
    amount: BigNumberish,
    options?: Overrides
  ): Promise<InvokeTransactionResponse>;
  transfer(
    recipient: BigNumberish,
    amount: BigNumberish,
    options?: Overrides
  ): Promise<InvokeTransactionResponse>;
  transfer_from(
    sender: BigNumberish,
    recipient: BigNumberish,
    amount: BigNumberish,
    options?: Overrides
  ): Promise<InvokeTransactionResponse>;
  approve(
    spender: BigNumberish,
    amount: BigNumberish,
    options?: Overrides
  ): Promise<InvokeTransactionResponse>;
  functions: {
    decimals(options?: CallOptions): Promise<[BN] & { res: BN }>;
    get_total_supply(options?: CallOptions): Promise<[BN] & { res: BN }>;
    balance_of(
      user: BigNumberish,
      options?: CallOptions
    ): Promise<[BN] & { res: BN }>;
    allowance(
      owner: BigNumberish,
      spender: BigNumberish,
      options?: CallOptions
    ): Promise<[BN] & { res: BN }>;
    initialize(options?: Overrides): Promise<InvokeTransactionResponse>;
    mint(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Promise<InvokeTransactionResponse>;
    transfer(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Promise<InvokeTransactionResponse>;
    transfer_from(
      sender: BigNumberish,
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Promise<InvokeTransactionResponse>;
    approve(
      spender: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Promise<InvokeTransactionResponse>;
  };
  callStatic: {
    decimals(options?: CallOptions): Promise<[BN] & { res: BN }>;
    get_total_supply(options?: CallOptions): Promise<[BN] & { res: BN }>;
    balance_of(
      user: BigNumberish,
      options?: CallOptions
    ): Promise<[BN] & { res: BN }>;
    allowance(
      owner: BigNumberish,
      spender: BigNumberish,
      options?: CallOptions
    ): Promise<[BN] & { res: BN }>;
    initialize(options?: CallOptions): Promise<[] & {}>;
    mint(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<[] & {}>;
    transfer(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<[] & {}>;
    transfer_from(
      sender: BigNumberish,
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<[] & {}>;
    approve(
      spender: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<[] & {}>;
  };
  populateTransaction: {
    decimals(options?: CallOptions): Invocation;
    get_total_supply(options?: CallOptions): Invocation;
    balance_of(user: BigNumberish, options?: CallOptions): Invocation;
    allowance(
      owner: BigNumberish,
      spender: BigNumberish,
      options?: CallOptions
    ): Invocation;
    initialize(options?: Overrides): Invocation;
    mint(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Invocation;
    transfer(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Invocation;
    transfer_from(
      sender: BigNumberish,
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Invocation;
    approve(
      spender: BigNumberish,
      amount: BigNumberish,
      options?: Overrides
    ): Invocation;
  };
  estimateFee: {
    decimals(options?: CallOptions): Promise<EstimateFeeResponse>;
    get_total_supply(options?: CallOptions): Promise<EstimateFeeResponse>;
    balance_of(
      user: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
    allowance(
      owner: BigNumberish,
      spender: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
    initialize(options?: CallOptions): Promise<EstimateFeeResponse>;
    mint(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
    transfer(
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
    transfer_from(
      sender: BigNumberish,
      recipient: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
    approve(
      spender: BigNumberish,
      amount: BigNumberish,
      options?: CallOptions
    ): Promise<EstimateFeeResponse>;
  };
}
