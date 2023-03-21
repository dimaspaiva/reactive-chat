import React, { useState } from 'react'

import Toast from './components/ToastWrapper'
import Router from './setup/Router';

import 'react-toastify/dist/ReactToastify.css';

import './setup/reset.css'
import './setup/global.css'
import UserContext, { User } from './contexts/UserContext';


const App = () => {
  const [user, setUser] = useState<User>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router />
      <Toast />
    </UserContext.Provider>
  )
}

export default App
