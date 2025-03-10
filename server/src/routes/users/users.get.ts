import { createRoute } from '@hono/zod-openapi'

import { users, UserSchema } from './users.models.ts'

// Get a user by ID
export const getUserRoute = createRoute({
  method: 'get',
  path: '/users/{id}',
  responses: {
    200: {
      description: 'User details',
      content: { 'application/json': { schema: UserSchema } },
    },
    404: {
      description: 'User not found',
    },
  },
  tags: ['user'],
})
export const getUserHandler = async (c: any) => {
  const user = users.find((u) => u.id === c.req.param('id'))
  if (!user) {
    return c.json({ message: 'User not found' }, 404)
  }
  return c.json(user, 200)
}

export const getOne = {
  route: getUserRoute,
  handler: getUserHandler,
}
