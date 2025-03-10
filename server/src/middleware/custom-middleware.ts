import { createMiddleware } from 'hono/factory'

export const customMiddleware = createMiddleware(async (_c, next) => {
  console.log(`.....[customMiddleware].....`)
  await next()
})
