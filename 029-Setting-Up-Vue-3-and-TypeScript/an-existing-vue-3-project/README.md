## Converting a Vite Project from JavaScript to TypeScript

> ⚠️ **Note:** The steps below are based on personal experience and may vary depending on the versions of Vite, Vue, and the plugins being used.

To convert an existing Vite project from JavaScript to TypeScript:

1. Install the required TypeScript dependencies:

```bash
npm install -D typescript vue-tsc
```

2. Rename the entry file:

```text
src/main.js → src/main.ts
```

After these changes, the project will be ready to use TypeScript.
