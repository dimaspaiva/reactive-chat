import { Request, Response } from 'express'

import { storeUser } from '../repositories/storeUser';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const { name, document } = req.body

  if (!name) {
    res.status(400).json({ message: 'missing user name' })
    return
  }

  if (!document) {
    res.status(400).json({ message: 'missing user document' })
    return
  }
  try {
    const user = await storeUser(name, document)
    res.status(201).json({ user })
  } catch (error) {
    res.status(500).json({ message: 'internal server error' })
  }
}
