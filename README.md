# Monorepo with rollup

## Getting started

1. Install all dependencies:
    ```shell
    $ npm install
    ```
2. Build `shared/core`:
    ```shell
    $ npm run build -w @monorepo/core
    ```
3. Build `apps/web` (which depends on `shared/core`):
    ```shell
    $ npm run build -w @monorepo/web
    ```

This command fails with the message:

```text
src/main.ts (5:9): "sayHi" is not exported by "../../shared/core/dist/index.js", imported by "src/main.ts".
```

When looking at `../../shared/core/dist/index.js`, it actually exports a function `sayHi`.