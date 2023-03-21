import { Request, Response } from 'express'
import { createErrorResponse, createSuccessResponse } from '../config/configUtils';

import { storeUser } from '../repositories/storeUser';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const requiredParams = ['name', 'document']
  const { name, document } = req.body

  for (const required of requiredParams) {
    if (!req.body[required]) {
      createErrorResponse(res, 400, `missing user ${required}`)
      return
    }
  }

  try {
    const user = await storeUser(name, document)
    createSuccessResponse(res, 201, { user })
    console.log(`new user created ${user.name}`)
  } catch (error) {
    createErrorResponse(res, 500, 'internal server error')
  }
}
