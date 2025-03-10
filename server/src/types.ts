import { createApp } from './app.ts'
import type { OpenAPIHono } from '@hono/zod-openapi'

export interface AppBindings {
  Variables: {}
}
export type AppOpenAPI = OpenAPIHono<AppBindings>

// Used for for the Hono RPC client
export type AppType = ReturnType<typeof createApp>
