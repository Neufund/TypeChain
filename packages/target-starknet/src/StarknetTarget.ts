import { zip } from 'lodash'
import { join, resolve } from 'path'
import { Abi, FunctionAbi, json } from 'starknet'
import { AbiEntry, StructAbi } from 'starknet/types/lib'
import { Config, FileDescription, Output, TypeChainTarget } from 'typechain'

const DEFAULT_OUT_PATH = './types/starknet-contracts/'

export class StarknetTarget extends TypeChainTarget {
  name = 'StarknetTarget'
  private readonly outDirAbs: string

  constructor(config: Config) {
    super(config)

    const { cwd, outDir } = config

    this.outDirAbs = resolve(cwd, outDir || DEFAULT_OUT_PATH)
  }

  transformFile(file: FileDescription): Output {
    const compiled = json.parse(file.contents)
    const name = file.path.split('/').splice(-1)[0].replace('.json', '')
    const abiByName = byName(compiled.abi)

    const { generateImportStatements, requestImport } = getModuleRequestor()

    const contractInterface = `
      interface ${name} {\n 
        ${functions(abiByName, 'default', requestImport).join('\n')}\n
        functions: {\n
          ${functions(abiByName, 'default', requestImport).join('\n')}\n
        }\n
        callStatic: {\n
          ${functions(abiByName, 'call', requestImport).join('\n')}\n
        }\n
        populateTransaction: {\n
          ${functions(abiByName, 'populate', requestImport).join('\n')}\n
        }\n
        estimateFee: {\n
          ${functions(abiByName, 'estimate', requestImport).join('\n')}\n
        }\n
      }\n`

    const result = `
      ${generateImportStatements()}
      ${contractInterface}
    `

    return {
      contents: result,
      path: join(this.outDirAbs, `${name}.ts`), // @todo fix, should have same behaviour as in other plugins
    }
  }
}

type RequestImport = (module: string, symbol: string, runtimeImport?: boolean) => string
// It's not possible to turn off compiler warnings for unused symbols (imports) so we need to do extra work and don't generate any types where they are not needed
function getModuleRequestor() {
  const requestedImports: { [moduleName: string]: Set<string> | undefined } = {}
  const runtimeImports: { [moduleName: string]: true | undefined } = {}

  const requestImport = (module: string, name: string, runtimeImport: boolean = false): string => {
    if (!requestedImports[module]) {
      requestedImports[module] = new Set()
    }
    requestedImports[module]!.add(name)

    if (runtimeImport) {
      runtimeImports[module] = true
    }

    return name
  }

  const generateImportStatements = (): string => {
    return Object.entries(requestedImports)
      .map(([moduleName, _symbols]): string => {
        const symbols = Array.from(_symbols!)
        const isRuntimeImport = !!runtimeImports[moduleName]

        return `import ${!isRuntimeImport ? 'type ' : ''}{${symbols.join(', ')}} from "${moduleName}"`
      })
      .join('\n')
  }

  return {
    requestImport,
    generateImportStatements,
  }
}

type AbiEntriesByName = Map<string, FunctionAbi | StructAbi>

function byName(abi: Abi): AbiEntriesByName {
  return abi.reduce((r, e) => r.set(e.name, e), new Map<string, FunctionAbi | StructAbi>())
}

type ReturnType = 'default' | 'call' | 'populate' | 'estimate'

function functions(abi: AbiEntriesByName, returnType: ReturnType, requestImport: RequestImport): string[] {
  return [...(abi.values() as any)] // @todo fix any
    .filter((e) => e.type === 'function') // && e.stateMutability === "view"
    .map((e: FunctionAbi) => {
      const args = entries(abi, e.inputs)
      const rets = returns(abi, e, returnType, requestImport)
      return `${e.name}(${args}):${rets}`
    })
}

function returns(abi: AbiEntriesByName, e: FunctionAbi, returnType: ReturnType, requestImport: RequestImport): string {
  switch (returnType) {
    case 'default':
      return e.stateMutability === 'view'
        ? `Promise<{${entries(abi, e.outputs)}}>`
        : `Promise<${requestImport('starknet', 'AddTransactionResponse')}>`
    case 'call':
      return `Promise<{${entries(abi, e.outputs)}}>`
    case 'populate':
      return `${requestImport('starknet', 'Invocation')}`
    case 'estimate':
      return `Promise<${requestImport('starknet', 'EstimateFeeResponse')}>`
  }
}

function entries(abi: AbiEntriesByName, abiEntries: AbiEntry[]) {
  if (abiEntries.length === 0) {
    return ''
  }

  return zip(abiEntries, abiEntries.slice(1), [undefined, ...abiEntries.slice(0, -1)])
    .filter(([e, n]) => !(n && `${n.name}_len` === e!.name && n.type.slice(-1) === '*'))
    .map(
      (
        [e, _, p], // @todo fix !
      ) =>
        p && `${e!.name}_len` === p.name && e!.type.slice(-1) === '*'
          ? `${e!.name}: ${mapType(abi, e!.type.slice(0, -1))}[]`
          : `${e!.name}: ${mapType(abi, e!.type)}`,
    )
    .join(', ')
}

const tuple = /\(([^,]+)(, ([^,]+))*\)/

function mapType(abi: AbiEntriesByName, type: AbiEntry['type']): string {
  if (type === 'felt') {
    return 'BigInt'
  }

  if (type === 'Uint256') {
    const entry = abi.get(type)! // @todo undefined
    if (entry.type === 'struct' && entry.members.length === 2) {
      //TODO: be more precise
      return 'BigInt'
    }
  }

  if (tuple.test(type)) {
    const types = type.slice(1, -1).replace(' ', '').split(',')
    return `[${types.map((t) => mapType(abi, t)).join(', ')}]`
  }

  if (abi.has(type)) {
    const entry = abi.get(type)! // @todo undefined
    if (entry.type === 'struct') {
      return `{${entries(abi, entry.members)}}`
    }
  }

  return type
}
