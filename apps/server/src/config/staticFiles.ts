import express, { Express } from 'express'
import { getPublicFolderPath } from './configUtils'

export const handlePublicFolder = (app: Express): void => {
  const publicPath = getPublicFolderPath()
  app.use(express.static(publicPath))
}
