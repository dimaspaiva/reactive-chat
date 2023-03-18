import { Request, Response } from 'express'

import { User } from "../models/user";

export const createUser = (req: Request, res: Response): Promise<User> => {
  const name = req.body.name

  if (!name)
}
