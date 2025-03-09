import { createApp } from './app.ts'
const app = createApp()

// Get the type of the routes and export it
export type AppType = typeof app
