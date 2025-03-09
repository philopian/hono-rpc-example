import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const PORT = 8484
Deno.serve({ port: PORT }, app.fetch)
