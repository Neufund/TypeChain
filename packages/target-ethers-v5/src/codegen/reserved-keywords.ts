import { BaseContract, constants } from 'ethers'

export const reservedKeywords = new Set([
  'then',
  ...Object.getOwnPropertyNames(BaseContract.prototype), // for methods
  ...Object.keys(new BaseContract(constants.AddressZero, [])), // for readOnly properties
])
