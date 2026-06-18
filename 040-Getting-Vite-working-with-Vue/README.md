## Vite Commands

### Install Vue Plugin

To work with Vue Single File Components (`.vue`) in a Vite project, install the official Vue plugin:

```bash
npm install -D @vitejs/plugin-vue
```

The `-D` flag (`--save-dev`) adds the package to `devDependencies`, since it is only required during development and build time.

### Development Server

```bash
npm run dev
```

Starts the Vite development server with Hot Module Replacement (HMR). Changes are reflected in the browser instantly without rebuilding the project.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

Starts a local server that serves the contents of the `dist` directory. This allows you to test the production build locally before deployment.

**Workflow:**

```bash
npm run build
npm run preview
```

This is useful for verifying that the application behaves correctly after production optimizations are applied.
