import React, { useContext } from "react"
import UserContext from "../../contexts/UserContext"

import './style.css'

const LogoutButton = () => {
  const { setUser } = useContext(UserContext)

  const logoutUser = () => {
    setUser(null)
  }

  return (
    <div className="logout-container">
      <button
        type="button"
        className="logout-action"
        onClick={logoutUser}
      >
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
