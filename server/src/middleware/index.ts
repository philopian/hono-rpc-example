import { logger } from 'hono/logger'

import type { OpenAPIHono } from '@hono/zod-openapi'
import { configureOpenAPI } from '~/middleware/configure-openapi.ts'
import { configureScalar } from '~/middleware/configure-scalar.ts'

export default function addMiddleware(app: OpenAPIHono) {
  app.use(logger())
  configureOpenAPI(app)
  configureScalar(app)
  return app
}
