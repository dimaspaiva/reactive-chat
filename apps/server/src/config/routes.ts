import { Express } from 'express'
import { join } from 'path'
import { createUser } from '../controllers/createUser'
import { getPublicFolderPath } from './configUtils'

export const configRoutes = (app: Express): void => {
  app.get('*', (_req, res) => {
    const publicFolderPath = getPublicFolderPath()
    res.sendFile(join(publicFolderPath, 'index.html'))
  })

  app.post('/api/user', createUser)
}
