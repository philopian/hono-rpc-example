import { OpenAPIHono } from '@hono/zod-openapi'
import * as users from './routes/users/index.ts'
import addMiddleware from './middleware/index.ts'

export function createApp() {
  const app = new OpenAPIHono()
    .openapi(users.list.route, users.list.handler)
    .openapi(users.getOne.route, users.getOne.handler)
    .openapi(users.create.route, users.create.handler)
    .openapi(users.patch.route, users.patch.handler)
    .openapi(users.remove.route, users.remove.handler)
  addMiddleware(app)

  return app
}
