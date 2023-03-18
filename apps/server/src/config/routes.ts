import { Express } from 'express'
import { join } from 'path'
import { getPublicFolderPath } from './configUtils'

export const configRoutes = (app: Express): void => {
  app.get('/', (req, res) => {
    const publicFolderPath = getPublicFolderPath()
    console.log(publicFolderPath)
    console.log('running :D')
    res.sendFile(join(publicFolderPath, 'index.html'))
  })
}
