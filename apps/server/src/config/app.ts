import express from 'express'
import { configRoutes } from './routes'
import { handlePublicFolder } from './staticFiles'

const app = express()

handlePublicFolder(app)
configRoutes(app)

export default app
