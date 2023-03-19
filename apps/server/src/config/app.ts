import express, { Express } from 'express'
import { handleJSONBody } from './bodyParser'
import { allowRequestWithCors } from './cors'
import { configRoutes } from './routes'
import { handlePublicFolder } from './staticFiles'

const createApp = (): Express => {
  const app = express()

  handlePublicFolder(app)
  handleJSONBody(app)
  app.use(allowRequestWithCors)
  configRoutes(app)
  return app
}

export default createApp()
