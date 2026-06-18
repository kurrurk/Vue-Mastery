# Vite: Glob Imports and Environment Variables

## Glob Imports

Vite supports dynamic imports using `import.meta.glob()`.

Example:

```js
const modules = import.meta.glob('./components/*.vue')
```

This creates an object containing all matching files and allows them to be loaded dynamically.

To import all modules immediately:

```js
const modules = import.meta.glob('./components/*.vue', {
  eager: true
})
```

Useful for automatic registration of components, pages, layouts, and assets.

---

## Environment Variables

Environment variables are stored in `.env` files.

Example:

```env
VITE_API_URL=http://localhost:3000
```

Variables can be accessed through:

```js
const apiUrl = import.meta.env.VITE_API_URL
```

Only variables prefixed with `VITE_` are available in client-side code.

Useful for storing API URLs, application settings, and environment-specific configuration.
