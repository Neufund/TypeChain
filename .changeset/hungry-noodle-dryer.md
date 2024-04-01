---
'typechain': patch
---

Fix the import syntax for barrel file imports referring to type-only files. Fixes a problem with ESM compatibility when using the `--node16-modules` flag.