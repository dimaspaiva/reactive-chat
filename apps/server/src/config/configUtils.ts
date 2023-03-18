import { join } from "path"

export const getPublicFolderPath = (): string => {
  return join(__dirname, '../../../..', 'public')
}
