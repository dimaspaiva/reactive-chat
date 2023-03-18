import { MongoHelper } from "../database/mongo";
import { User } from "../models/user";

export const storeUser = async (name: string, document: string): Promise<User> => {
  const newUser = await MongoHelper.add<User>({ name, document }, 'users')
  return newUser
}
