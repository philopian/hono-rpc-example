import { createRoute } from '@hono/zod-openapi'

import { users } from './users.models.ts'

// Delete a user
export const deleteUserRoute = createRoute({
  method: 'delete',
  path: '/users/{id}',
  responses: {
    204: {
      description: 'User deleted',
    },
    404: {
      description: 'User not found',
    },
  },
  tags: ['user'],
})
export const deleteUserHandler = async (c: any) => {
  const userIndex = users.findIndex((u) => u.id === c.req.param('id'))
  if (userIndex === -1) {
    return c.json({ message: 'User not found' }, 404)
  }
  users.splice(userIndex, 1)
  return c.status(204).send()
}

export const remove = {
  route: deleteUserRoute,
  handler: deleteUserHandler,
}
