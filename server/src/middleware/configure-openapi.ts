import type { OpenAPIHono } from '@hono/zod-openapi'

const REST_API_VERSION = '0.0.0'

export function configureOpenAPI(app: OpenAPIHono) {
  app.doc(`/refs`, {
    openapi: '3.0.0',
    info: {
      version: REST_API_VERSION,
      title: 'Hono OpenAPI & RPC Example',
    },
  })
}
