import express, { Express } from 'express'
import { configRoutes } from './routes'
import { handlePublicFolder } from './staticFiles'

const createApp = (): Express => {
  const app = express()

  handlePublicFolder(app)
  configRoutes(app)
  return app
}

export default createApp()
