import { createContext } from "react";

export type User = {
  id: string
  name: string
  document: string
}

export type UserContextProps = {
  user?: User,
  setUser: (user: User) => void
}

const UserContext = createContext<UserContextProps>(null)

export default UserContext
