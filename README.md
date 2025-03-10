# Hono RPC Example

This example demonstrates type-safe REST requests using Hono RPC with:
- Server: Deno runtime
- Client: Node.js with PNPM package manager

## Getting Started

The server exposes type-safe REST endpoints that can be consumed by the client application, providing full TypeScript support and autocompletion.

1. Start the server:
    ```bash
    $ cd server
    $ deno task dev
    ```

2. View the OpenAPI documentation:
    - Open [localhost:8484/docs](http://localhost:8484/docs) in your browser

3. Got to the client `client/src/api.ts` and test out the type safety API call

    ![](assets/screenshot-client-intellisence.jpg)




## Note
- Using Deno for the server, make sure you add the `"nodeModulesDir": "auto"` to `deno.json` file in order for the types to be used in the client.
- **Gotchas**: When using `@hono/zod-openapi` i had to chain the routes directly on the `const app = new OpenAPIHono()` to get the types to work on the client. For example:

    ```ts
    const app = new OpenAPIHono()
        .openapi(users.list.route, users.list.handler)
        .openapi(users.getOne.route, users.getOne.handler)
        .openapi(users.create.route, users.create.handler)
        .openapi(users.patch.route, users.patch.handler)
        .openapi(users.remove.route, users.remove.handler)
      addMiddleware(app)
    ```
- I couldn't leverage multiple Hono routers like:

  ```ts
  const routes = [
    root,
    contact,
  ] as const

  export default routes
  export type AppType = typeof routes[number]
  ```
