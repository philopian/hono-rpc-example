import type { OpenAPIHono } from '@hono/zod-openapi'
import { cors } from 'hono/cors' // https://hono.dev/docs/middleware/builtin/cors

const trustedOrigins = '*'
export default function enableCors(app: OpenAPIHono) {
  app.use(
    `/*`,
    cors({
      origin: trustedOrigins,
      allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'x-refresh-token'],
      exposeHeaders: ['Content-Length', 'X-Request-Id'],
      maxAge: 86400, // Cache preflight requests
      credentials: true, // Allows cookies and headers like Authorization
    }),
  )
}
