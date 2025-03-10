import { z } from '@hono/zod-openapi'

// Im-memory database
export const users: { id: string; name: string; email: string }[] = []

// Schemas
export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
})
// .openapi("Users");

export const UserList = z.array(UserSchema)
