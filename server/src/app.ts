import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
})

export function createApp() {
  const usersRouter = new Hono()
    .get('/', (c) => c.text('Hello Users!'))
    .get('/:id', (c) => c.text(`Hello User ${c.req.param('id')}!`))
    .post('/', zValidator('json', UserSchema), (c) => c.text('Create User'))
    .put('/:id', zValidator('json', UserSchema), (c) => c.text(`Update User ${c.req.param('id')}!`))
    .delete('/:id', (c) => c.text(`Delete User ${c.req.param('id')}!`))

  const todosRouter = new Hono()
    .get('/', (c) => c.text('Hello Todos!'))
    .get('/:id', (c) => c.text(`Hello Todo ${c.req.param('id')}!`))
    .post('/', (c) => c.text('Create Todo'))
    .put('/:id', (c) => c.text(`Update Todo ${c.req.param('id')}!`))
    .delete('/:id', (c) => c.text(`Delete Todo ${c.req.param('id')}!`))

  // index.ts
  const app = new Hono()
    .use(
      '*',
      cors({
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
        maxAge: 600,
      }),
    )
    .route('/users', usersRouter)
    .route('/todos', todosRouter)

  return app
}
