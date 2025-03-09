import { createApp } from './app.ts'

const app = createApp()

const PORT = 8484
Deno.serve({ port: PORT }, app.fetch)
