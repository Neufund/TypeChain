// #!/usr/bin/env node

import { resolve } from 'path'
import {
  unlinkSync,
  readdirSync,
  renameSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
  copyFileSync,
  rmdirSync,
} from 'fs'
import { execSync } from 'child_process'

const rootDir = resolve(__dirname, '..')
const contractsDir = resolve(rootDir, 'contracts')
const outDir = resolve(contractsDir, 'compiled')

const contracts = readdirSync(contractsDir, { withFileTypes: true }).filter(
  (d) => d.isFile() && d.name.endsWith('.sol'),
)

function main() {
  removeOutDir()

  console.log('Generating ABIs')
  execSync(`yarn solcjs --abi ./contracts/* --bin -o ./contracts/compiled/`, { cwd: rootDir })

  renameUglyNames()

  copyTruffleV4()
  copyTruffleV5()
}

main()

function removeOutDir() {
  console.log('Cleaning up contracts/abis')

  try {
    rmdirSync(outDir, { recursive: true })
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e
    }
  }
}

/**
 * Rename ugly names generated by solc to something human redable.
 * NOTE: we assume that there is only one contract per file
 */
function renameUglyNames() {
  console.log('Renaming ABIs')

  const files = readdirSync(outDir)

  for (const file of files) {
    const renamed = file.replace(/^__contracts_([A-Za-z0-9-]+)_sol_([A-Za-z0-9-]*)\.([a-z]+)$/, '$1.$3')

    console.log(file, ' => ', renamed)
    renameSync(resolve(outDir, file), resolve(outDir, renamed))
  }
}

/**
 * Copy contracts from ./contract to:
 *  - packages/target-truffle-v4-test
 *
 * and change compiler version
 */
function copyTruffleV4() {
  console.log('Copying truffle-v4 contracts')

  const truffleV4ContractsDir = resolve(__dirname, '../packages/target-truffle-v4-test/contracts')

  const files = contracts
    // do not copy Library.sol and LibraryConsumer.sol as enums in libraries are not properly supported in Truffle v4 ABIs
    .filter((f) => !f.name.endsWith('Library.sol') && !f.name.endsWith('LibraryConsumer.sol'))
    .map((f) => f.name)

  if (!existsSync(truffleV4ContractsDir)) {
    console.log(`Creating ${truffleV4ContractsDir}`)
    mkdirSync(truffleV4ContractsDir, { recursive: true })
  }

  for (const file of files) {
    console.log('Processing: ', file)

    const contents = readFileSync(resolve(contractsDir, file), 'utf8')
    const newContents = contents.replace('0.6.4', '0.4.24')
    writeFileSync(resolve(truffleV4ContractsDir, file), newContents)
  }
}

function copyTruffleV5() {
  console.log('Copy truffle-v5 contracts')

  const truffleV5ContractsDir = resolve(__dirname, '../../packages/target-truffle-v5-test/contracts')
  mkdirSync(truffleV5ContractsDir, { recursive: true })

  for (const { name } of contracts) {
    copyFileSync(resolve(contractsDir, name), resolve(truffleV5ContractsDir, name))
  }
}
