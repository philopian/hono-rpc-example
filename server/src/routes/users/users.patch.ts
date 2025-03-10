import { createRoute } from '@hono/zod-openapi'

import { users, UserSchema } from './users.models.ts'

// Update a user
export const patchUserRoute = createRoute({
  method: 'patch',
  path: '/users/{id}',
  request: {
    body: {
      content: {
        'application/json': { schema: UserSchema.partial().omit({ id: true }) },
      },
    },
  },
  responses: {
    200: {
      description: 'User updated',
      content: { 'application/json': { schema: UserSchema } },
    },
    404: {
      description: 'User not found',
    },
  },
  tags: ['user'],
})

export const patchUserHandler = async (c: any) => {
  const userIndex = users.findIndex((u) => u.id === c.req.param('id'))
  if (userIndex === -1) {
    return c.json({ message: 'User not found' }, 404)
  }
  const data = await c.req.valid('json')
  users[userIndex] = { ...users[userIndex], ...data }
  return c.json(users[userIndex], 200)
}

export const patch = {
  route: patchUserRoute,
  handler: patchUserHandler,
}
