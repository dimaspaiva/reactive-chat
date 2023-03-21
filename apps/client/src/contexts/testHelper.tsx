import React, { ReactElement, useState } from "react"
import UserContext, { User } from "./UserContext"

export const UserContextTestWrapper: React.FC<{ children: ReactElement, startUser?: User }> = (props) => {
  const { children, startUser } = props
  const [user, setUser] = useState<User>(startUser)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
