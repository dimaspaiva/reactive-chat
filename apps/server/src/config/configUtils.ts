import { Response } from "express"
import { join } from "path"

export const getPublicFolderPath = (): string => {
  return join(__dirname, '../../../..', 'public')
}

export const createSuccessResponse = (res: Response, status: number, body: Record<string, unknown>): void => {
  res.status(status).json(body)
}

export const createErrorResponse = (res: Response, status: number, message: string): void => {
  res.status(status).json({ message })
}
