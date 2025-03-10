import { createRoute } from '@hono/zod-openapi'

import { UserList, users } from './users.models.ts'

// Get all users
const listUsersRoute = createRoute({
  method: 'get',
  path: '/users',
  responses: {
    200: {
      description: 'List of users',
      content: { 'application/json': { schema: UserList } },
    },
  },
  tags: ['user'],
})

const listUsersHandler = async (c: any) => {
  return c.json(users, 200)
}

export const list = {
  route: listUsersRoute,
  handler: listUsersHandler,
}
