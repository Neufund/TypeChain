// #!/usr/bin/env node

import { execSync } from 'child_process'
import { copyFileSync, mkdirSync, readdirSync, renameSync, rmdirSync } from 'fs'
import { resolve } from 'path'

const rootDir = resolve(__dirname, '..')
const contractsDir = resolve(rootDir, 'contracts')
const outDir = resolve(contractsDir, 'compiled')

const contracts = readdirSync(contractsDir, { withFileTypes: true }).filter(
  (d) => d.isFile() && d.name.endsWith('.sol'),
)

function main() {
  removeOutDir()
  generateABIs()
  renameUglyNames()
  copyTruffleV5()
}

main()

function generateABIs() {
  console.log('Generating ABIs')

  const contractPaths = contracts.map((f) => `./contracts/${f.name}`).join(' ')
  execSync(`yarn solcjs --abi ${contractPaths} --bin -o ./contracts/compiled/`, { cwd: rootDir })
}

function removeOutDir() {
  console.log('Cleaning up contracts/abis')

  try {
    rmdirSync(outDir, { recursive: true })
  } catch (e: any) {
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

function copyTruffleV5() {
  console.log('Copy truffle-v5 contracts')

  const truffleV5ContractsDir = resolve(rootDir, 'packages/target-truffle-v5-test/contracts')
  mkdirSync(truffleV5ContractsDir, { recursive: true })

  for (const { name } of contracts) {
    copyFileSync(resolve(contractsDir, name), resolve(truffleV5ContractsDir, name))
  }
}
