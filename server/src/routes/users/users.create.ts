import { createRoute } from '@hono/zod-openapi'

import { users, UserSchema } from './users.models.ts'

// Create a user
export const createUserRoute = createRoute({
  method: 'post',
  path: '/users',
  request: {
    body: {
      content: {
        'application/json': { schema: UserSchema.omit({ id: true }) },
      },
    },
  },
  responses: {
    201: {
      description: 'User created',
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  tags: ['user'],
})

export const createUserHandler = async (c: any) => {
  const data = await c.req.valid('json')
  const newUser = { id: crypto.randomUUID(), ...data }
  users.push(newUser)
  return c.json(newUser, 201)
}

export const create = {
  route: createUserRoute,
  handler: createUserHandler,
}
