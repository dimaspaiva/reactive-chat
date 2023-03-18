import express, { Express } from 'express'
import { handleJSONBody } from './bodyParser'
import { configRoutes } from './routes'
import { handlePublicFolder } from './staticFiles'

const createApp = (): Express => {
  const app = express()

  handlePublicFolder(app)
  handleJSONBody(app)
  configRoutes(app)
  return app
}

export default createApp()
