import { apiReference } from '@scalar/hono-api-reference'

import type { OpenAPIHono } from '@hono/zod-openapi'

export function configureScalar(app: OpenAPIHono) {
  app.get(
    `/docs`,
    apiReference({
      theme: 'solarized', // https://github.com/scalar/scalar/blob/main/documentation/themes.md
      layout: 'classic',
      defaultHttpClient: {
        targetKey: 'shell',
        clientKey: 'curl',
      },
      spec: {
        url: `/refs`,
      },
    }),
  )
}
