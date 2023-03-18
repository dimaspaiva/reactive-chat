import { Express, json } from 'express'

export const handleJSONBody = (app: Express): void => {
  app.use(json())
}
